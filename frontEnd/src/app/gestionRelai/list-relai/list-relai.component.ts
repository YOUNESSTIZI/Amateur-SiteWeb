import { Component, OnInit } from '@angular/core';
import {Relai} from '../../models/Relais.model';
import { Router } from '@angular/router';
import {RelaiService} from '../../service/relai.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-relai',
  templateUrl: './list-relai.component.html',
  styleUrls: ['./list-relai.component.css']
})
export class ListRelaiComponent implements OnInit {

  public relais: Relai[] = [];
  public relai: Relai;
  private relaiSub: Subscription;



  constructor(private router: Router, private relaiService: RelaiService) { }

  ngOnInit() {
    this.relaiSub = this.relaiService.relai$.subscribe(
      (relais) => {
        this.relais = relais;
      }
    );
    this.relaiService.getRelai();
  }


  onModify(id: string) {
    this.router.navigate(['/modifRelai/' + id]);
  }


  onDelete(id: string) {
    this.relaiService.deleteRelai(id).then(
      () => { this.router.navigate(['/listRelai']); }
    );
  }


}


