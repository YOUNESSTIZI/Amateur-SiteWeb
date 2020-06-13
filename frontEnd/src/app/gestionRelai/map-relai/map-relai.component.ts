import { Component, OnInit } from '@angular/core';
import {Relai} from '../../models/Relais.model';
import {AgmInfoWindow} from '@agm/core';

import {Subscription} from 'rxjs';
import {RelaiService} from '../../service/relai.service';


@Component({
  selector: 'app-map-relai',
  templateUrl: './map-relai.component.html',
  styleUrls: ['./map-relai.component.css']
})
export class MapRelaiComponent implements OnInit {


  relais: Array<Relai> = [];
  relaiSub: Subscription;
  lat = 32.9357718;
  lng = -5.6696504;
  nouveauIW: AgmInfoWindow;
  ancienIW: AgmInfoWindow;
  animation: string;

  constructor(private relaiService: RelaiService) {}

  ngOnInit(): void {
    this.relaiSub = this.relaiService.relai$.subscribe(
      (relais) => {
        this.relais = relais;

      }
    );
    this.relaiService.getRelai();
  }


  showInfo(infoWindow: AgmInfoWindow) {
    if (this.ancienIW) {
      this.nouveauIW = infoWindow;
      this.ancienIW.close();
    }
    this.ancienIW = infoWindow;

  }

  hideInfo() {
    this.ancienIW.close();
  }



  onMouseOver(infoWindow, gm) {

    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }

    gm.lastOpen = infoWindow;

    infoWindow.open();
  }
}

