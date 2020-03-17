import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as EmojiButton from '@joeattardi/emoji-button';

@Component({
  selector: 'ngx-emoji-button-test',
  template: `
    <button type="button" #emoji>EMOJI</button>
  `,
  styles: []
})
export class EmojiComponent implements AfterViewInit {

  @ViewChild('emoji') emojiButton: ElementRef;

  ngAfterViewInit() {
    const emojiButtonElement = this.emojiButton.nativeElement;

    const picker = new EmojiButton({
      categories: ['smileys', 'animals', 'objects', 'people'],
      zIndex: 100, // Since the send email z-index value is 99
      showPreview: false,
      showSearch: false,
      showVariants: false,
      style: 'twemoji'
    });

    picker.on('emoji', (emoji) => {
      console.log('fzwael debug >> ', emoji);
    });

    emojiButtonElement.addEventListener('click', () => {
      picker.togglePicker(emojiButtonElement);
    });
  }
}
