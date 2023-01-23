import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Ngx-Toaster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// HTTP
import { HttpClientModule } from '@angular/common/http';

// Componenets
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
