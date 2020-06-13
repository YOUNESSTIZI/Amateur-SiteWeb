import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewEventComponent} from '../../new-event/new-event.component';
import {ListRelaiComponent} from '../../gestionRelai/list-relai/list-relai.component';
import {NouveauRelaiComponent} from '../../gestionRelai/nouveau-relai/nouveau-relai.component';
import {ExtraHeaderComponent} from '../extra-header.component';
import {TestuploadsComponent} from '../../checkEvent/testuploads.component';
import {AuthService} from '../../service/auth.service';
import {MapRelaiComponent} from '../../gestionRelai/map-relai/map-relai.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor(public authService: AuthService, private router: Router) { }



  ngOnInit(): void {

  }


  HomeClick() {
    // @ts-ignore
    this.router.navigate(["Home"],ExtraHeaderComponent);

  }

  CheckEventClick() {
    // @ts-ignore
    this.router.navigate(["CheckEvent"],TestuploadsComponent);
  }

  CreateEventClick() {
    // @ts-ignore
    this.router.navigate(["CreateEvent"],NewEventComponent);
  }

  mapClick() {
    // @ts-ignore
    this.router.navigate(["map"],MapRelaiComponent);
  }

  listRelaiClick() {
     // @ts-ignore
    this.router.navigate(["listRelai"],ListRelaiComponent);
  }

  NouveauRelaiClick() {
     // @ts-ignore
    this.router.navigate(["nvRelai"],NouveauRelaiComponent);
  }
}
