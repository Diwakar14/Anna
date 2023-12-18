import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-xml-object',
  templateUrl: './xml-object.component.html',
  styleUrls: ['./xml-object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XmlObjectComponent implements OnInit {
  @Input()
  item!: any;

  @Input()
  recursiveListTmpl!: any;

  @Input()
  collapsed: boolean = false;

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

      if (this.item.type == 'leaf') {
        this.collapsed = true;
      }
    }
  }
}
