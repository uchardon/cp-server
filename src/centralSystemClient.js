import WebSocket from 'ws';
import { Connection } from './connection';
import {
  DEBUG_LIBNAME,
  OCPP_PROTOCOL_1_6
} from './constants';

export default class CentralSystemClient {
  constructor(connection) {
    this.connection = connection;
  }
}