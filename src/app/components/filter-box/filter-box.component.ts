import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SlideDown } from 'src/app/animations/SlideDown';
import { FilterConts } from './filter.contants';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
  animations: [SlideDown],
})
export class FilterBoxComponent {
  @Input() toggleShowHide: boolean = false;
  @Output() toggle = new EventEmitter();

  @Input() open: boolean = false;
  @Input() filterData: any = { data: [] };
  @Output() selected = new EventEmitter();

  filterForm = this.fb.group({
    sort: ['asc'],
    filter: this.fb.group({
      condition1: ['eq'],
      conditionValue1: [''],
      operator: ['and'],
      condition2: ['eq'],
      conditionValue2: [''],
    }),
  });

  conditions: any[] = FilterConts.Conditions;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  apply() {
    console.log(this.filterForm);
    this.selected.emit();
    this.close();
  }

  remove() {
    this.apply();
  }

  close() {
    this.toggle.emit({ context: 'close' });
  }
}
