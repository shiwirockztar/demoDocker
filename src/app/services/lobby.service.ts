import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class LobbyService extends Socket {
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @Output() status: EventEmitter<any> = new EventEmitter();
  @Output() timer: EventEmitter<any> = new EventEmitter();

  constructor(public CookieService: CookieService) {
    super({
      url: 'http://localhost:5000',
      options: {
        query: {
          //nameRoom: cookieService.get('sala'),
        },
      },
    });

    // Front escucha del backend
    this.listen();
  }

  // Al iniciar
  emitEventStart = (payload = {}) => {
    this.ioSocket.emit('client: start', payload);
  };
  // Enviar mensajes
  emitEventChat = (payload = {}) => {
    this.ioSocket.emit('client: chat', payload);
  };
  emitEventPlay = (payload = {}) => {
    this.ioSocket.emit('client: play', payload);
  };

  listen = () => {
    // Recibir texto
    this.ioSocket.on('server: chat', (res: any) => {
      this.callback.emit(res);
    });
    // Cargar mensajes
    this.ioSocket.on('server: inbox', (res: any) => {
      this.callback.emit(res);
    });
    // Actualiza estado del jugador
    this.ioSocket.on('server: userIngame', (res: any) => {
      this.status.emit(res);
    });
    // Actualiza estado del jugador
    this.ioSocket.on('server: timer', (res: any) => {
      this.timer.emit(res);
    });
  };
}
