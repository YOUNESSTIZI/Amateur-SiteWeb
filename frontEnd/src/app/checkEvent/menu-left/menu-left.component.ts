import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Event} from '../../models/Event.model';
import {EventPageComponent} from '../carousel-event/event-page/event-page.component';
import {Router} from '@angular/router';
import {TestuploadsComponent} from '../testuploads.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MethodsService} from '../../service/methods.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {
  @Input() events: Event[];
  modalRef: BsModalRef;
  eventSuppr : Event;
  constructor(private router: Router,private checkEvent: TestuploadsComponent,private modal: NgbModal, private methodService: MethodsService,private modalService: BsModalService ){}


  ngOnInit(): void {
    console.log(this.events)
  }

  openModal(template: TemplateRef<any>, slide: Event) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.eventSuppr = slide;
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



  onCheck(_id: string) {
    // @ts-ignore
    this.router.navigate(["/eventPage",_id],EventPageComponent);
  }
}
