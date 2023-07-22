import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Pregunta } from '../models/pregunta.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PreguntasService {
  preguntas: any[] =[];

  constructor(private db: AngularFireDatabase) {}

  getConexion() {
    return new Promise( (resolve, reject)=>{
      this.db.object('preguntas/').snapshotChanges().subscribe( (datos: any) => {
      console.log(datos);
      if(datos.payload.exists()){
        resolve(this.preguntas = datos.payload.val());
      }else{
        reject(new Error('Ocurrió un problema en BD'));
      }
    });
   });
  }

  getArrPreguntas(): Pregunta[]{
    return this.preguntas;
  }

  agregarPregunta(pregunta: Pregunta): void {
    // Suponiendo que 'preguntas/' es la ruta correcta a tus preguntas en la base de datos
    const nuevaPreguntaRef = this.db.list('preguntas/');
    nuevaPreguntaRef.push(pregunta);
  }
   
}
