import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { DataHubService } from 'src/app/service/data-hub.service';
import { JsonStreamDecoder } from './JsonStreamDecoder';
import { ProductHeader } from 'src/app/models/TableHeader';
import { ClothingService } from 'src/app/service/clothing.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-data-hub-realtime',
  templateUrl: './data-hub-realtime.component.html',
  styleUrls: ['./data-hub-realtime.component.scss'],
})
export class DataHubRealtimeComponent implements OnInit {
  connection!: HubConnection;
  selectAll: boolean = false;
  clothes: any[] = [];
  headers = ProductHeader;

  /**
   * Is Loading
   */
  isLoading: boolean = false;

  /**
   *
   */
  constructor(
    private dataHub: DataHubService,
    private clothService: ClothingService
  ) {}

  ngOnInit(): void {
    this.initWebSocket();
  }

  initWebSocket() {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:7042/datahub')
      .build();

    this.connection.on('onData', (from: string, body: string) => {
      console.log(from, body);
      this.clothes.unshift(body);
    });

    this.connection.on('onConnected', (user) => {
      console.log(user);
    });

    this.connection.on('onStart', (user) => {
      console.log(user);
    });

    this.connection.on('onDisconnected', (user) => {
      console.log(user);
    });

    this.connection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  }

  checkAll(value: boolean) {
    if (value) this.clothes.forEach((item) => (item.checked = true));
    else this.clothes.forEach((item) => (item.checked = false));
  }

  trackItem(index: number, item: any) {
    return item.id;
  }

  getData() {
    this.clothes = [];
    fetch(
      'https://localhost:7237/api/Clothing/stream?PageSize=3000&PageNumber=1'
    ).then(async (response) => {
      this.isLoading = true;
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Failed to read response');
      }
      const decoder = new JsonStreamDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (!value) continue;
        decoder.decodeChunk(value, (item: any) => {
          this.clothes.push(item);
        });
      }
      reader.releaseLock();
    });
  }

  getDataSimple() {
    this.dataHub.getData().subscribe({
      next(value) {
        console.log(value);
      },
    });
  }

  play() {
    // this.connection
    //   .invoke('Start', '7QhA92e_IkZp4MC2ZcHSGg')
    //   .catch((err) => console.log(err));
    let queryParams = new HttpParams()
      .set('PageSize', 2000)
      .set('PageNumber', 1);
    this.clothService.getAllClothesViaStream(queryParams).subscribe({
      next: (value: any) => {
        this.clothes = value;
      },
    });
  }

  pause() {}
  stop() {}
}
