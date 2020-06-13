import {Component, Input, OnInit} from '@angular/core';
import {MethodsService} from '../../service/methods.service';
import {Event} from '../../models/Event.model';
@Component({
  selector: 'app-date-set',
  templateUrl: './date-set.component.html',
  styleUrls: ['./date-set.component.scss']
})

export class DateSetComponent implements OnInit {
  @Input() event: Event;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();


  constructor(private methodService: MethodsService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void{

  }

  OnChange() {
    console.log(this.bsValue);
    this.methodService.setDate(this.bsValue);
  }
}
