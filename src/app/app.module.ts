import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import { InputComponent } from './input/input.component';
import { MainComponent } from './main/main.component';
import { ConverterPipe } from './selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    InputComponent,
    MainComponent,
    ConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
