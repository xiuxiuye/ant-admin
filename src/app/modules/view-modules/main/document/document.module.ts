import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document.component';
import { DocumentRoutingModule } from './document-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DocumentRoutingModule
  ],
  declarations: [DocumentComponent]
})
export class DocumentModule {constructor() {
  console.log('document')
}}
