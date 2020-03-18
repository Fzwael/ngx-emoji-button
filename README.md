![emoji-button](https://user-images.githubusercontent.com/219285/76373859-f9871a80-6317-11ea-9bd2-9b85551e4d40.png)

An Angular wrapper for [emoji-button](https://emoji-button.js.org)

## Installation

You can install to your angular project using this command : 
``` 
npm install @joeattardi/emoji-button
npm install ngx-emoji-button 
```

## Basic usage

To use ngx-emoji-button you can import it directly to your module and use it with this code :

``` html
<ngx-emoji-button
 [categories] = "['smileys', 'animals', 'objects', 'people']"
 [style] = "'native'"
 (emojiPicked) = "handleEmojiPicked($event)"
>
</ngx-emoji-button>
```
Handle the output :

``` typescript
  handleEmojiPicked(emoji: any){
    this.selectedEmoji = emoji;
    console.log('Selected emoji ' , emoji);
  }
  ```

As input we can pass the options to be used emoji-button.
A full list can be found here : [Options](https://github.com/joeattardi/emoji-button#options)

## Note

This is still a first version more improvements are to come !
