import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-extra-header',
  templateUrl: './extra-header.component.html',
  styleUrls: ['./extra-header.component.scss']
})
export class ExtraHeaderComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(public authService: AuthService,private modalService: BsModalService) { }

  ngOnInit(): void {

  }




  OnConnexion(template: TemplateRef<any>) {
    console.log(this.authService.isAuthenticated);
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-sm' ,centered: true})
    );
  }


  onInscription(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' ,centered: true})
    );
  }

  OnDeconnexion(templateConnexion: TemplateRef<any>) { // après on show un template
    localStorage.setItem('isAuthenticated','false');
    localStorage.setItem('token',null);
    localStorage.setItem('userId',null);
    window.location.reload();
  }
}
