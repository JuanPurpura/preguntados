import { Component } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta.model';
import { PreguntasService } from 'src/app/providers/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent {
  preguntas: Pregunta[]=[];
  pregunta!: Pregunta;
  indicePreguntaActual = 0;
  vidas: number = 3;

  constructor(private db: PreguntasService) {
    this.db.getConexion().then( ()=>{
      console.log('conexion exitosa!');
      this.preguntas=this.db.getArrPreguntas();
      console.log(this.preguntas);
      this.mostrarPreguntaActual();
    }).catch( (err)=>{
      console.log(err);
    });
  }

  mostrarPreguntaActual() {
    this.pregunta = this.preguntas[this.indicePreguntaActual];
  }

  verificarRespuesta(respuestaSeleccionada: string) {
    if (respuestaSeleccionada === this.pregunta.respuestaCorrecta) {
      this.indicePreguntaActual++;
      if (this.indicePreguntaActual < this.preguntas.length) {
        this.mostrarPreguntaActual();
      } else {
        alert('¡Felicidades, has terminado el juego!\nAdivinaste: '+this.indicePreguntaActual+' preguntas.');
        window.location.reload();
      }
    } else {
      this.vidas--;

      if(this.vidas===0){
        alert('Respuesta incorrecta, el juego ha terminado.\nAdivinaste: '+this.indicePreguntaActual+' preguntas.');
        window.location.reload();
      }
      
    }
  }
}
