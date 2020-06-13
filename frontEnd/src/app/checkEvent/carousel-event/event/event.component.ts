import {Component, Input, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {Event} from '../../../models/Event.model';
import {FormControl, FormGroup} from '@angular/forms';
import {MethodsService} from '../../../service/methods.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CarouselEventComponent} from '../carousel-event.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})

export class EventComponent implements OnInit {
  createEvent: FormGroup;
  @Input() eventL : Event;
  selectedFile: File;
  FileChanged = false ;
  modalRef: BsModalRef;

  constructor(private carouselComponent: CarouselEventComponent,private modalService: BsModalService,private method:MethodsService) {

  }

  ngOnInit(): void {
    this.createEvent = new FormGroup({
      title: new FormControl(),
      detail: new FormControl(),
      date: new FormControl()
    });


  }


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.FileChanged = true;
  }

  onUpload(validation: TemplateRef<any>) {

    this.method.editEvenement(this.FileChanged,this.createEvent, this.selectedFile, this.eventL._id).subscribe(
      () => {
        console.log('Enregistrement terminé !');
        this.modalService.show(validation, {class: 'modal-sm'});
        this.ngOnInit();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  onLoadData():void {

      this.createEvent.setValue({
        title: this.eventL.title,
        detail: this.eventL.detail,
        date: this.eventL.date
      });
  }

  decline() {
    this.modalRef.hide();
    this.carouselComponent.decline();
  }

}
