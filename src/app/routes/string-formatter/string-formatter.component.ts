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
  formatter: string = 'json';
  rawData: string = '';

  ngOnInit(): void {
    const data = parseJSON(this.json, []);

    console.log(data);
    this.jsonData = data;
  }

  formatXml() {
    this.formatter = 'xml';
    const data = parseXML(xmlData);

    console.log(data);
    this.jsonData = data;
  }
  formatJson() {
    this.formatter = 'json';
    const data = parseJSON(this.json, []);
    this.jsonData = data;
  }

  showRaw() {
    this.formatter = 'raw';
    this.rawData = JSON.stringify(this.json) + '';
  }
}
