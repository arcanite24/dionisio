import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class VerduraGateway {

    @WebSocketServer()
    server: Server;

}