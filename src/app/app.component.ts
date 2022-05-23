import { Component } from '@angular/core'
import { MainviewComponent } from './mainview/mainview.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nestif';
   myBanner:string ="assets/images/banner_nestIf.png";
  
  
}
