import { Component, OnInit } from '@angular/core';
import {User} from '../models/User.model';
import {AuthService} from '../service/auth.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  users : User[];
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.auth.getUsers().subscribe(users => {
      this.users = users['users'];
      console.log(this.users);
    })
  }

  onAccepter(user: User) {
      this.auth.accept(user).subscribe(result => {
        console.log("updated ! ");
        console.log(result);
        this.ngOnInit();
      });
  }

  onRejeter(user: User) {
    this.auth.rejet(user).subscribe(result => {
      console.log("updated ! ");
      console.log(result);
      this.ngOnInit();
    });
  }

  makeAdmin(user: User) {
    this.auth.makeAdmin(user).subscribe(result => {
      console.log("updated ! ");
      console.log(result);
      this.ngOnInit();
    });
  }

  makeVisiteur(user: User) {
    this.auth.makeVisiteur(user).subscribe(result => {
      console.log("updated ! ");
      console.log(result);
      this.ngOnInit();
    });
  }
}
