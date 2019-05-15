import WebSocket from 'ws';

import { Connection } from './connection';
import {
  DEBUG_LIBNAME,
  OCPP_PROTOCOL_1_6
} from './constants';
import CentralSystemClient from './centralSystemClient';


export default class CentralSystem {
  constructor(options) {
    this.options = options || {};
    this.clients = [];
  }

  listen(port = 9220, host = null) {
    this.port = port;

    //const validateConnection = this.options.validateConnection || (() => true);

    const wsOptions = {
      port,
      host,
      handleProtocols: (protocols, req) => {
        if (protocols.indexOf(OCPP_PROTOCOL_1_6) === -1) {
          return '';
        }
        return OCPP_PROTOCOL_1_6;
      },
      verifyClient: async(info, cb) => {
        if (info.req.url === LOGGER_URL) {
          return cb(true);
        }
        const isAccept = await validateConnection(info.req.url);

        console.log(`Request for connect "${info.req.url}" (${info.req.headers['sec-websocket-protocol']}) - ${isAccept ? 'Valid identifier' : 'Invalid identifier'}`);

        cb(isAccept, 404, 'Central System does not recognize the charge point identifier in the URL path');
      },
      ...(this.options.wsOptions || {})
    };

    //this.server = new WebSocket.Server(wsOptions);
    this.server = new WebSocket.Server({ port: 9220 });

    this.server.on('error', (ws, req) => {
      console.info('ERROR: ', ws, req);
    });

    this.server.on('upgrade', (ws, req) => {
      console.info('upgrade: ', req);
    });
    this.server.on('connection', (ws, req) => this.onNewConnection(ws, req));
    console.info('connection: Listen on HOST', host);
    console.info('connection: Listen on PORT', port);
  }

  onNewConnection(socket, req) {
    socket.on('error', (err) => {
      console.info(err, socket.readyState);
    });

    if (!socket.protocol) {
      // From Spec: If the Central System does not agree to using one of the subprotocols offered by the client,
      // it MUST complete the WebSocket handshake with a response without a Sec-WebSocket-Protocol header and then
      // immediately close the WebSocket connection.
      console.log('Close connection due to unsupported protocol');
      return socket.close();
    }

    const connection = new Connection(socket, req, this.logger);

    const client = new CentralSystemClient(connection);

    connection.onRequest = (command) => this.onRequest(client, command);

    socket.on('close', (err) => {
      const index = this.clients.indexOf(client);
      this.clients.splice(index, 1);
    });
    this.clients.push(client);
  }

  async onRequest(client, command) {
    console.log('>> ON REQUEST <<');
  }
}