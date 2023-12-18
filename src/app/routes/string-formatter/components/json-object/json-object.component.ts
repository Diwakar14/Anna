import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-object',
  templateUrl: './json-object.component.html',
  styleUrls: ['./json-object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonObjectComponent {
  @Input()
  item!: any;

  @Input()
  recursiveListTmpl!: any;

  @Input()
  collapsed: boolean = false;
}
