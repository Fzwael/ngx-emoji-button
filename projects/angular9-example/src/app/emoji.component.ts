import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import * as EmojiButton from '@joeattardi/emoji-button';

@Component({
  selector: 'ngx-emoji-button-test',
  template: `
    <button class="emoji-button" type="button" #emoji>😄</button>
  `,
  styles: []
})
export class EmojiComponent implements AfterViewInit {

  @ViewChild('emoji') emojiButton: ElementRef;

  /**
   * List of inputs
   */
  @Input('autoHide') autoHide: boolean;
  @Input('autoFocusSearch') autoFocusSearch: boolean
  @Input('categories') categories: EmojiButton.Category[];
  @Input('emojiVersion') emojiVersion: EmojiButton.EmojiVersion;
  @Input('position') position: EmojiButton.Placement;
  @Input('recentsCount') recentsCount: number;
  @Input('rootElement') rootElement: boolean;
  @Input('showPreview') showPreview: boolean;
  @Input('showSearch') showSearch: boolean;
  @Input('showRecents') showRecents: boolean;
  @Input('showVariants') showVariants: boolean;
  @Input('style') style: EmojiButton.EmojiStyle;
  @Input('theme') theme: EmojiButton.EmojiTheme;
  @Input('zIndex') zIndex: number;
  @Input('i18n') i18n: EmojiButton.I18NStrings;

  /**
   * List of outputs
   */
  @Output() emojiPicked = new EventEmitter();

  ngAfterViewInit() {
    const emojiButtonElement = this.emojiButton.nativeElement;

    const EmojiProperties = {
      autoHide: this.autoHide,
      autoFocusSearch: this.autoFocusSearch,
      categories: this.categories,
      emojiVersion: this.emojiVersion,
      position: this.position,
      recentsCount: this.recentsCount,
      rootElement: this.rootElement,
      showPreview: this.showPreview,
      showSearch: this.showSearch,
      showRecents: this.showRecents,
      showVariants: this.showVariants,
      style: this.style,
      theme: this.theme,
      zIndex: this.zIndex,
      i18n: this.i18n
    };

    // Prune EmojiProperties
    Object.keys(EmojiProperties).forEach(key => EmojiProperties[key] === undefined ? delete EmojiProperties[key] : {});

    // Create the picker
    const picker = new EmojiButton(EmojiProperties);

    // Creating the toggle
    emojiButtonElement.addEventListener('click', () => {
      picker.togglePicker(emojiButtonElement);
    });

    // Adding the callback function when an emoji is selected
    picker.on('emoji', (emoji) => {
      this.emojiPicked.emit(emoji);
    });

  }
}
