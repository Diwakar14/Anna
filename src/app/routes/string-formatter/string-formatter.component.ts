import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { parseJSON, parseXML } from 'src/app/shared/Parser';
import { dataJSON, xmlData } from './data';

@Component({
  selector: 'app-string-formatter',
  templateUrl: './string-formatter.component.html',
  styleUrls: ['./string-formatter.component.scss'],
})
export class StringFormatterComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  jsonData: any[] = [];
  json = dataJSON;

  ngOnInit(): void {
    const data = parseJSON(this.json, []); // parseXML(xmlData);

    console.log(data);
    this.jsonData = data;
  }
}
