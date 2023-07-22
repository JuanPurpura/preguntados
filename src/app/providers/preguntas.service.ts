import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Pregunta } from '../models/pregunta.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class PreguntasService {
  preguntas: Pregunta[] = [];

  constructor(private db: AngularFireDatabase) {}

  getConexion() {
    return new Promise((resolve, reject) => {
      this.db.object('preguntas/').snapshotChanges().subscribe((datos: any) => {
        if (datos.payload.exists()) {
          this.preguntas = Object.values(datos.payload.val());
          resolve(this.preguntas);
        } else {
          reject(new Error('Ocurrió un problema en BD'));
        }
      });
    });
  }

  getArrPreguntas(): Pregunta[]{
    return this.preguntas;
  }

  agregarPregunta(pregunta: Pregunta): void {
    const nuevaPreguntaRef = this.db.list('preguntas/');
    nuevaPreguntaRef.push(pregunta);
  }
   
}
