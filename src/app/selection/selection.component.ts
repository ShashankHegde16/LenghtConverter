import { Component, OnInit, SimpleChange } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthConversions'
})
export class ConverterPipe implements PipeTransform {

  transform(value: number, converstion: string) {
    if (!value) {
      return 0;
    }
    switch (converstion) {
      case 'FT-M': // convert from Feet-Meters
        return value * 0.3048;
      case 'M-FT': // convert from Meters-Feet
        return value / 0.3048;
      default:
        return value;
    }

  }
}
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  options = [
    {
      'value': 'M',
      'key': 'Meter'
    }, {
      'value': 'FT',
      'key': 'Feet'
    }
  ];

  option1 = 'M';
  option2 = 'FT';
  ConvertedValue = 0;
  filter = 'M-FT';

  constructor() { }

  ngOnInit(): void {

  }


  handleInput(event: any) {
    this.ConvertedValue = event;

  }
  uponChange(event: any) {
    this.filter = this.option1 + '-' + this.option2;
  }



}
