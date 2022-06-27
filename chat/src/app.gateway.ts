import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets'
import { Server } from 'engine.io';
import { Socket } from 'socket.io'

/* use the this decorator to identify that is a websocket gateway */
@WebSocketGateway()
export class AppGateway implements OnGatewayInit , OnGatewayConnection , OnGatewayDisconnect{


  // @WebSocketServer() wss : Server;
  /* add a logger */
  private logger :Logger = new Logger('AppGateway')
   /* implement the interface OnGatewayInit */
   /* usef after the gateway initialized */ 
  
  afterInit(server: Server) {
      this.logger.log('initialized')
  }

  handleConnection(client: Socket, ...args: any[]) {
    /* client id is a unique string different for every socket connected */
    /* if a socket disconnect and reconenct will going to have a different socket id */
      this.logger.log(`Client disconnected ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client connected ${client.id}`);
  }

  /*
    once we're connected and the client sends some message , like some basic text on 
    the event mesgToServer , our server will handle it , and it will take the text that was
    sent by the clinet , and emit an event called msgToClient 
  */
  @SubscribeMessage('msgToServer') /* the server will subscribe to the event called msgToServer */
  /* it doesn't matetr what you call this function */

  /*
   two things will be passed to function :
     handleMessage(client: any, payload: any): string 
    clientSocket  , payload text string 
  */
handleMessage(client: Socket, text: string): WsResponse<string> {
  /* this is only will going to return to the client that sent the event */
  /* for exxample in like a chat app not everyon's will going to receive this message  */
   return { event : 'msgToClient' , data : 'Hello wolrd!' };  
  }
}

/* to send the message to everyone  we use a decorator called WebSocketServer*/
/* send the response to everyone */
// handleMessage(client: Socket, text: string): void {
//     this.wss.emit('msgToClient',text);
//   }
// }


/* without using type safe */
// handleMessage(client: Socket, text: string): void {
//   client.emit('msgToClient' , text);
// }

/*
  -WebSocketGateway is runing 
  -the nestjs is runing
  -if a client were to connect and send a message to the server event ,
  then our server would handle it
  ==> the next step is to create a client in a little bit of html and js to connect 
  to the serevr and test it 

  - whenever we want to handle an event on a server , we put the decorator  @SubscribeMessage('msgToServer') just above whatever  fucntion is going to handle it  , and we tell the name of the event that will  handle it  (msgToServer)

  OnGatewayConnection will run whenever a client connects to teh server
*/


/* build a nest webSocketServer
in order to test the server will going to bild a simple client that will
conenct to the server and send messages back and forth
*/