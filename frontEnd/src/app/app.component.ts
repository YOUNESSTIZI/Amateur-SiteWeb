import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval'
import { setTheme } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  requieredHome:boolean;
  title = 'frontEnd';

  constructor() {
    setTheme('bs4');
  }

  ngOnInit() {

    this.requieredHome = true;
  }
}
