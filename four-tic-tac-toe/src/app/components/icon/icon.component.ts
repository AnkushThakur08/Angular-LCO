import { Component, OnInit, Input } from '@angular/core';

// Icons
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit {
  /* Input Binding */
  @Input() iconName: string = '';

  /*  jo name humne diya = actually the icon Name  */
  faPenIcon = faPen;
  faCircleIcon = faCircle;
  faTimesIcon = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
