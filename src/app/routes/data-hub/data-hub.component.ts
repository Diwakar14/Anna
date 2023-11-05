import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductHeader } from 'src/app/models/TableHeader';
import { ClothingService } from 'src/app/service/clothing.service';

@Component({
  selector: 'app-data-hub',
  templateUrl: './data-hub.component.html',
  styleUrls: ['./data-hub.component.scss'],
})
export class DataHubComponent implements OnInit {
  selectAll: boolean = false;
  clothes: any[] = [];

  headers = ProductHeader;

  constructor(private clothingService: ClothingService) {}
  ngOnInit(): void {
    this.getClothes();
  }

  checkAll(value: boolean) {
    if (value) this.clothes.forEach((item) => (item.checked = true));
    else this.clothes.forEach((item) => (item.checked = false));
  }

  trackItem(index: number, item: any) {
    return item.id;
  }

  showFilterBox(i: number) {
    this.headers[i].open = true;
  }

  handleFilterClose(i: number) {
    this.headers[i].open = false;
  }

  getClothes() {
    let queryParams = new HttpParams()
      .set('PageSize', 1000)
      .set('PageNumber', 1);
    this.clothingService.getAllClothes(queryParams).subscribe({
      next: (value: any) => {
        this.clothes = value.data.map((item: any) => ({
          ...item,
          checked: false,
        }));
      },
      error: (err: any) => {},
    });
  }
}
