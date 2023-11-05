export interface ITableHeader {
  key: string;
  name: string;
  filterable: boolean;
  sortable: boolean;
  open: boolean;
}

export const ProductHeader: ITableHeader[] = [
  {
    key: 'name',
    name: 'Name',
    filterable: false,
    sortable: false,
    open: false,
  },
  {
    key: 'mainCategory',
    name: 'Main Category',
    filterable: false,
    sortable: false,
    open: false,
  },
  {
    key: 'subCategory',
    name: 'Sub. Category',
    filterable: false,
    sortable: false,
    open: false,
  },
  {
    key: 'ratings',
    name: 'Rating',
    filterable: false,
    sortable: false,
    open: false,
  },
  {
    key: 'noOfRatings',
    name: '#Rating',
    filterable: false,
    sortable: false,
    open: false,
  },
  {
    key: 'discountPrice',
    name: 'Discounted Price',
    filterable: false,
    sortable: false,
    open: false,
  },
  {
    key: 'actualPrice',
    name: 'Actual Price',
    filterable: false,
    sortable: false,
    open: false,
  },
];
