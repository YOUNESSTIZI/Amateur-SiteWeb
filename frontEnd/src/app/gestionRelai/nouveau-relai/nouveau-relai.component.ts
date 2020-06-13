import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RelaiService} from '../../service/relai.service';
import {NgForm} from '@angular/forms';
import {Relai} from '../../models/Relais.model';

@Component({
  selector: 'app-nouveau-relai',
  templateUrl: './nouveau-relai.component.html',
  styleUrls: ['./nouveau-relai.component.css']
})
export class NouveauRelaiComponent implements OnInit {


  constructor(private router: Router, private relaiService: RelaiService) {
  }

  ngOnInit(): void {
  }


  onSubmit(f: NgForm) {
    if (!f.invalid) {
      const relai = new Relai( f.value.region, f.value.latitude, f.value.longitude, f.value.site , f.value.freqTx, f.value.shift, f.value.tone, f.value.mode , f.value.locator);

      this.relaiService.createNewRelai(relai).then( () => { this.router.navigate(['/listRelai']); });

    }
  }


}
