import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-email-verif',
  templateUrl: './email-verif.component.html',
  styleUrls: ['./email-verif.component.scss']
})
export class EmailVerifComponent implements OnInit {

  @Input() signUp : FormGroup;
  codeVerify: FormGroup;
  code: string ;
  isSent = "false" ;
  falseValue= false ;
  isDone;
  constructor(private modalService: BsModalService,private method: AuthService) { }

  ngOnInit(): void {
    this.codeVerify = new FormGroup({
      codeVerif: new FormControl(),
    });

}

  VerifyCode(template: TemplateRef<any>) {
    this.modalService.show(template, {class: 'modal-sm'});

    this.falseValue = false;
    if(this.codeVerify.get("codeVerif").value === this.code){
        //now we sign in !!
      this.isDone='wait';
        this.method.SignUp(this.signUp).subscribe(()=>{
            this.isDone='true';
            console.log('Enregistrement terminé !');
          },
          error => {
            console.log(error);
            this.isDone = 'false';
          }
        );;

    }else{
        this.falseValue = true;
    }

  }

  sendCode() {
    this.code = this.method.makeid(7);
    this.isSent = "wait" ;
    this.method.Verify(this.code,this.signUp).subscribe(res=>{
      console.log("Connection etablished with Email server!!");
      console.log(res.message);
      this.isSent = "done";
    })
  }

  refresh() {
    window.location.reload();
  }
}
