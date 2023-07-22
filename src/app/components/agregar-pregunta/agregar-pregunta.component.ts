import { Component } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta.model';
import { PreguntasService } from 'src/app/providers/preguntas.service';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css'],
})
export class AgregarPreguntaComponent {
  nuevaPregunta: Pregunta = new Pregunta('', [], '');
  respuestasInput: string = '';

  constructor(private preguntasService: PreguntasService) {}

  agregarPregunta() {
    // Convierte la cadena de respuestas en un arreglo de strings utilizando split
    this.nuevaPregunta.respuestas = this.respuestasInput.split(',');

    // Llamar al PreguntasService para agregar la nueva pregunta
    this.preguntasService.agregarPregunta(this.nuevaPregunta);

    // Limpiar el formulario después de agregar la pregunta
    this.nuevaPregunta = new Pregunta('', [], '');
    this.respuestasInput = '';
  }
}