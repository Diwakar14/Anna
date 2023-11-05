import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-xml-object',
  templateUrl: './xml-object.component.html',
  styleUrls: ['./xml-object.component.scss'],
})
export class XmlObjectComponent implements OnInit {
  @Input()
  item!: any;

  @Input()
  recursiveListTmpl!: any;

  attributes: string = '';

  constructor() {}
  ngOnInit(): void {
    if (this.item) {
      if (this.item.attributes?.length > 0) {
        this.attributes = this.item.attributes
          .map((item: any) => item.key + '="' + item.value + '" ')
          .join('')
          .trim();
      }
    }
  }
}
