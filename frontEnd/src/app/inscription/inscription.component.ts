import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth.service';





@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  modalRef: BsModalRef;
  signUp: FormGroup;
  isDone ;
  mot_De_passeIncorrect;



  constructor(private modalService: BsModalService,private authService : AuthService) { }

  ngOnInit(): void {
    this.signUp = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(),
      password1: new FormControl(),
      password2: new FormControl(),
    });

    this.isDone = null ;
    this.mot_De_passeIncorrect = null;
  }

  onSubmit(templateVerification: TemplateRef<any>) {
    this.mot_De_passeIncorrect = false;
     if(this.signUp.get('password2').value === this.signUp.get('password1').value){

       this.modalRef = this.modalService.show(
         templateVerification,
         Object.assign({}, { class: 'modal-sm' ,centered: true})
       );

     }
     else{
       this.mot_De_passeIncorrect = true;
     }
  }




}
