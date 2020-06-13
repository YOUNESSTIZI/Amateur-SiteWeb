import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Event} from '../../models/Event.model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {MethodsService} from '../../service/methods.service';
import {TestuploadsComponent} from '../testuploads.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExtraHeaderComponent} from '../../Home/extra-header.component';
import {Router} from '@angular/router';
import {EventPageComponent} from './event-page/event-page.component';


@Component({
  selector: 'app-carousel-event',
  templateUrl: './carousel-event.component.html',
  styleUrls: ['./carousel-event.component.scss']
})
export class CarouselEventComponent implements OnInit {


 @Input() events: Event[];
  eventSuppr : Event;
  activeSlideIndex = 0;
  modalRef: BsModalRef;

  constructor(private router: Router,private checkEvent: TestuploadsComponent,private modal: NgbModal, private methodService: MethodsService,private modalService: BsModalService ){}

  openModal(template: TemplateRef<any>, slide: Event) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.eventSuppr = slide;
  }


  ngOnInit(): void {

  }


  confirm(templateSupprimer: TemplateRef<any>) {
    this.methodService.deleteEvent(this.eventSuppr).subscribe(data =>{
      this.modalService.show(templateSupprimer, {class: 'modal-sm'});
      console.log(this.eventSuppr._id);
      //refrech the page !
      this.checkEvent.ngOnInit();
    });


  }

  decline() {
    this.modalRef.hide();
  }
  slide : Event;
  onEdit(template: TemplateRef<any>, slide: Event) {

    this.slide = slide;
    this.modal.open(template,{backdropClass: 'light-blue-backdrop',size: 'lg'});


  }

  onCheck(_id: string) {
       // @ts-ignore
    this.router.navigate(["/eventPage",_id],EventPageComponent);
  }
}
