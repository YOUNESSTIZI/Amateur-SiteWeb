import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroup} from '@angular/forms';


import {HttpClient} from '@angular/common/http';
import {MethodsService} from '../service/methods.service';
import {EventPageComponent} from '../checkEvent/carousel-event/event-page/event-page.component';
import {TestuploadsComponent} from '../checkEvent/testuploads.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  constructor( private router : Router ,private httpClient: HttpClient, private method: MethodsService) {}

  isDone = null ;
  createEvent: FormGroup;
  selectedFile: File;

  ngOnInit(): void {
    this.createEvent = new FormGroup({
      title: new FormControl(),
      detail: new FormControl(),
      });

  }



  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }



  onUpload() {
    this.method.envoyerEvenement( this.createEvent, this.selectedFile).subscribe(
      () => {
        console.log('Enregistrement terminé !');


        this.isDone = true;

        // @ts-ignore
        this.router.navigate(["/CheckEvent"],TestuploadsComponent);

      },
      (error) => {
        console.log('Erreur ! : ' + error);
        this.isDone = false;

      }
    );

  }

}
