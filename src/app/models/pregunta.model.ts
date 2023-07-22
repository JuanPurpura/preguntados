export class Pregunta {
  id: number;
  texto: string;
  respuestas: string[];
  respuestaCorrecta: string;

  constructor(id: number, texto: string, respuestas: string[], respuestaCorrecta: string ){
    this.id=id;
    this.texto = texto;
    this.respuestas = respuestas;
    this.respuestaCorrecta = respuestaCorrecta;
  }
}