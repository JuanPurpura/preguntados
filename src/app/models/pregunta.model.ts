export class Pregunta {
  texto: string;
  respuestas: string[];
  respuestaCorrecta: string;

  constructor(texto: string, respuestas: string[], respuestaCorrecta: string ){
    this.texto = texto;
    this.respuestas = respuestas;
    this.respuestaCorrecta = respuestaCorrecta;
  }
}