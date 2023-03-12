import { style } from '@angular/animations';
import { Renderer2 } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { LobbyService } from 'src/app/services/lobby.service';
import { LobbyFront } from 'src/app/models/lobby-front';
import { randomName } from 'src/app/models/user-data';

@Component({
  selector: 'app-lobby3',
  template: ` <h1>{{ a }}</h1> `,
  templateUrl: './lobby3.component.html',
  styleUrls: ['./lobby3.component.css'],
})
export class Lobby3Component implements OnInit {
  @ViewChild('hash') seudonimo: ElementRef;

  //let { msg, nickName, progress, t, s, strok, rot } = new LobbyFront;
  //let { msg, nickName, progress, t, s, strok, rot } = data;

  public text = {
    //nickName: 'shiwi',
    nickName: randomName(),
  };
  // si se encuentra en la lista de jugadores Por defecto no (hasta que le de jugar)
  public isAvailabe: boolean = false;
  public visibility: boolean = false;
  public time = {
    porc: '',
    t: '',
    s: '00',
    strok: 0,
    rot: '',
  };

  constructor(
    private socketWebService: LobbyService,
    //estilos dinamicos
    private render2: Renderer2 //private data: LobbyFront
  ) {
    // let { msg, nickName, progress, t, s, strok, rot } = data;

    // Actualizamos el estatus del player (boton)
    this.socketWebService.status.subscribe((res) => {
      this.isAvailabe = res;
      //window.location.reload(); no se puede recargar CicloContinuo
    });
    // Sincronizacion del cronometro
    this.socketWebService.timer.subscribe((res) => {
      this.visibility = true;
      this.timer(res);
    });
  }

  ngOnInit(): void {
    // Enviamos el nick al server para su chekeo
    this.socketWebService.emitEventStart();
  }

  public play() {
    // Iniciamos juego con su seudonimo
    this.socketWebService.emitEventPlay(this.text.nickName);
    //this.visibility = true;
    window.location.reload();
  }

  timer(res): void {
    let { t, s } = res;
    // add zero before single digit number
    s = s < 10 ? '0' + s : s;
    let equiv = (s * 100) / t;

    //this.time.s = Math.round(equiv) + `%<br><span>` + s + `</span>`;
    this.time.porc = Math.round(equiv) + `%`; //+ '\n'
    this.time.s = s;
    this.time.strok = 440 - (440 * s) / t;
    this.time.rot = `rotate(${s * (360 / t)}deg)`;

    if (s < 1) {
      this.visibility = false;
      //window.open('https://animate.style', '_blank');
      //window.location.href = "https://animate.style";
    }
  }

  change(): void {
    // const elementTit: any = document.querySelector('#username');
    //elementTit.style.color = 'red';
    const elementTit: any = this.seudonimo.nativeElement;
    this.render2.setStyle(elementTit, 'color', 'red');
    console.log(this.text.nickName);
  }

  ngAfterViewInit() {}
}
