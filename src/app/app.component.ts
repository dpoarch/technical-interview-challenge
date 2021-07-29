import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'breedPicker';
  items: any;
   constructor(){
    this.items = [
        {
            label: 'Breeds'
        }
    ];
   }
}

