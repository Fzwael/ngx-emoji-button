import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  selectedEmoji = "";

  handleEmojiPicked(emoji: any){
    this.selectedEmoji = emoji;
    console.log('Selected emoji ' , emoji);
  }
}
