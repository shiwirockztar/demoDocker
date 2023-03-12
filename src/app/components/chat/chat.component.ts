import { Component } from '@angular/core';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  public text = {
    msg: '',
    nickName: 'shiwi',
  };
  public chat: string = '';

  constructor(private socketWebService: LobbyService) {
    // Lo que recibimos del server lo enviamos al chat del lobby
    this.socketWebService.callback.subscribe((res) => {
      const { text } = res;
      this.chat = text;
    });
  }

  formSubmit() {
    if (this.text.msg == '' || this.text.msg == null) {
      return;
    }
    this.socketWebService.emitEventChat(this.text);
    this.text.msg = '';
  }
}
