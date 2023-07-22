import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PreguntasComponent } from "./preguntas/preguntas.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        PreguntasComponent
      ],
    imports: [
      FormsModule,
      CommonModule
    ],
    exports: [
      PreguntasComponent
    ]
  })
  export class ComponentsModule { }
