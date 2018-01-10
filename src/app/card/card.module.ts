import {NgModule, ModuleWithProviders} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { CardComponent } from './card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports: [
    CardComponent
  ]
})

export class CardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CardModule
    };
  }
}
