import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './models/data';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  /**
   * All Products
   */
  allProducts = PRODUCTS.products;

  /**
   * Products
   */
  products: any[] = [];

  /**
   * Page Size
   */
  pageSize: number = 13;

  /**
   * Page Number
   */
  pageNumber!: number;

  /**
   * Total Page
   */
  totalPage!: number;

  /**
   * Get Page List.
   * @param size Size of the array.
   * @returns New Array of the given size.
   */
  getPages(size: number) {
    return new Array(size);
  }

  ngOnInit(): void {
    this.allProducts = PRODUCTS.products;
    this.totalPage = Math.ceil(this.allProducts.length / this.pageSize);

    this.getProductAtPage(1);
  }

  getProductAtPage(pageNumber: number) {
    this.products = this.allProducts.slice(
      (pageNumber - 1) * this.pageSize,
      this.pageSize * pageNumber
    );

    this.pageNumber = pageNumber;
  }

  nextPage() {
    this.getProductAtPage(this.pageNumber + 1);
  }

  prevPage() {
    this.getProductAtPage(this.pageNumber - 1);
  }
}
