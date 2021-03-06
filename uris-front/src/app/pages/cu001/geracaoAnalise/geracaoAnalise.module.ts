import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../core/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalModule, TabsModule, TooltipModule } from 'ng2-bootstrap';
import { MyDatePickerModule} from 'mydatepicker';
import { ProgressbarModule } from 'ngx-bootstrap';


/* Rutas */
import { routing }       from './geracaoAnalise.routing';
/* Interfaz principal */
import {GeracaoAnaliseDocCmp} from "./geracaoAnaliseDoc/index";
import { GeracaoAnaliseCmp} from './geracaoAnalise/index';

/* Interfaces secundarias */

import { UtilConstParam, UtilConstRutas } from './_constantes/index';
import { UtilConstComunRutas } from "../../comun/_constantes/index";
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';




@NgModule({
  imports: [
    ProgressbarModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    routing,
    MyDatePickerModule
  ],
  entryComponents: [
  ],
  providers: [
    UtilConstRutas,
    UtilConstParam,
    UtilConstComunRutas
  ],
  declarations: [
    GeracaoAnaliseCmp,
    GeracaoAnaliseDocCmp,
     ]
})
export class GeracaoAnaliseModule {
}
