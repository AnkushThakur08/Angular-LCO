import { Component } from '@angular/core';
import arrayOfWords from '../utlis/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'three-word-generator';

  limit: number = 10;
  words: string = '';

  handleSlideChange = (newlimit: number) => {
    this.limit = newlimit;
  };

  handleGenerate = () => {
    this.words = arrayOfWords.slice(0, this.limit).join(',');
    console.log(this.words);
  };
}
