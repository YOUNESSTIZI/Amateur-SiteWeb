import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  modalRef: BsModalRef;
  Connexion: FormGroup;
  loading = false;
  errorMsg: string;
  Error = false;
  wait = false;
  constructor(private router : Router,private authService : AuthService) { }

  ngOnInit(): void {
    this.Connexion = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  connexion() {
    this.loading = true;
    this.wait = true ;
    this.authService.connexion(this.Connexion)
      .subscribe(res=>{
          this.wait = false ;
          localStorage.setItem('userId',res.userId);
          localStorage.setItem('isAuthenticated',"true");
          console.log('Bienvenue' );
          this.authService.userId = res.userId ;
          localStorage.setItem('token',res.token);
          window.location.reload();
        },
        error => {
          this.wait = false ;
           this.Error = true;
            console.log(error);
            this.errorMsg = error;
        }
      );
  }
}
