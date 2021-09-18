import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-errors-form',
  templateUrl: './errors-form.component.html',
  styleUrls: ['./errors-form.component.css']
})
export class ErrorsFormComponent implements OnInit {

  @Input() control: AbstractControl;
  @Input() controlLabel: string;

  constructor() { }

  ngOnInit(): void {
  }

}
