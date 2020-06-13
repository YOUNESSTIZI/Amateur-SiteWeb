import {Component, OnInit} from '@angular/core';
import {MethodsService} from '../service/methods.service';
import {Event} from '../models/Event.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-testuploads',
  templateUrl: './testuploads.component.html',
  styleUrls: ['./testuploads.component.scss']
})
export class TestuploadsComponent implements OnInit {
  events: Event[];

  constructor(private router :Router,private methodService:MethodsService){}


  ngOnInit(): void {
    this.methodService.getEventsFromServer().subscribe(data => {
      console.log('uploaded successufly');
      this.events = data['events'];
      console.log(this.events);

    });


  }



}
