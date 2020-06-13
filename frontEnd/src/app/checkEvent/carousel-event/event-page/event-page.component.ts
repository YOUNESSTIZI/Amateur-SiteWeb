import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MethodsService} from '../../../service/methods.service';
import {Event} from '../../../models/Event.model';
import {TestuploadsComponent} from '../../testuploads.component';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
  _id : string;
  event: Event ;
  image : File;
  constructor(private router : Router ,private methodService: MethodsService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('id');
    this.methodService.getEvent(this._id).subscribe((res) => {
      this.event = res['result'];

    });


  }

  onRetour() {
    // @ts-ignore
    this.router.navigate(["/CheckEvent"],TestuploadsComponent);
  }
}
