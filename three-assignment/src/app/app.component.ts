import { Component } from '@angular/core';
import arrayOfWords from '../utlis/words';
import arrayOfCountry from '../utlis/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'three-assignment';

  limit: number = 10;
  words: string = '';
  randomNumber: number = 0;
  countryName: string = '';

  handleSliderChange = (newLimit: number) => {
    this.limit = newLimit;
  };

  handleGenerator = () => {
    this.words = arrayOfWords.slice(0, this.limit).join(',');
    console.log(this.words);
  };

  handleRandomNumber = () => {
    this.randomNumber = Math.floor(Math.random() * 50);
    console.log(this.randomNumber);
  };

  handleGenerateCountry = () => {
    this.countryName = arrayOfCountry.slice(0, this.randomNumber).join(',');
    console.log(this.countryName);
  };
}
