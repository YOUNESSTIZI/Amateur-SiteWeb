import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Relai} from '../../models/Relais.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RelaiService} from '../../service/relai.service';

@Component({
  selector: 'app-modifier-relai',
  templateUrl: './modifier-relai.component.html',
  styleUrls: ['./modifier-relai.component.css']
})
export class ModifierRelaiComponent implements OnInit {
  relai: Relai;
  relaiForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private relaiService: RelaiService) { }

  ngOnInit(): void {
    this.relaiForm = this.formBuilder.group({
      region: [null, Validators.required],
      site: [null, Validators.required],
      freqTx: [0, Validators.required],
      shift: [0, Validators.required],
      tone: [0, Validators.required],
      mode: [null, Validators.required],
      locator: [null, Validators.required]
    });
    this.route.params.subscribe(
      (params) => {
        this.relaiService.getRelaiById(params.id).then(
          (relai: Relai) => {
            this.relai = relai;
            this.relaiForm.get('region').setValue(this.relai.region);
            this.relaiForm.get('site').setValue(this.relai.site);
            this.relaiForm.get('freqTx').setValue(this.relai.freqTx);
            this.relaiForm.get('shift').setValue(this.relai.shift);
            this.relaiForm.get('tone').setValue(this.relai.tone);
            this.relaiForm.get('mode').setValue(this.relai.mode);
            this.relaiForm.get('locator').setValue(this.relai.locator);
          }
        );
      }
    );
  }

  onSubmit(f: NgForm) {
    if (!f.invalid) {
      const relai = new Relai(f.value.region, f.value.latitude, f.value.longitude, f.value.site , f.value.freqTx, f.value.shift, f.value.tone, f.value.mode , f.value.locator);

      this.relaiService.modifyRelai(this.relai._id, relai).then( () => { this.router.navigate(['/relai']); });

    }
  }
}
