import { Component } from '@angular/core';
import { SlideDown } from './animations/SlideDown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideDown],
})
export class AppComponent {
  title = 'anna';
}
