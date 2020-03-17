import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmojiComponent } from './emoji.component';

// ngx-emoji-button module
import { NgxEmojiButtonModule } from 'ngx-emoji-button';

@NgModule({
  declarations: [
    AppComponent,
    EmojiComponent
  ],
  imports: [
    BrowserModule,
    NgxEmojiButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
