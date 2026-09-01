import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { themeAlpine, type ColDef } from 'ag-grid-community';

@Component({
  imports: [AgGridAngular],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  myTheme = themeAlpine;
  rowData = [
    {
      make: 'Tesla',
      model: 'Model Y',
      price: 64950,
      electric: true,
      year: 2024,
      color: 'Pearl White',
      seats: 5,
      horsepower: 384,
      range: 330,
    },
    {
      make: 'Ford',
      model: 'F-Series',
      price: 33850,
      electric: false,
      year: 2024,
      color: 'Black',
      seats: 5,
      horsepower: 290,
      range: 450,
    },
    {
      make: 'Toyota',
      model: 'Corolla',
      price: 29600,
      electric: false,
      year: 2023,
      color: 'Silver',
      seats: 5,
      horsepower: 168,
      range: 530,
    },
    {
      make: 'BMW',
      model: 'i4',
      price: 59400,
      electric: true,
      year: 2024,
      color: 'Blue',
      seats: 5,
      horsepower: 335,
      range: 301,
    },
    {
      make: 'Chevrolet',
      model: 'Silverado',
      price: 31000,
      electric: false,
      year: 2024,
      color: 'Red',
      seats: 5,
      horsepower: 355,
      range: 420,
    },
    {
      make: 'Honda',
      model: 'Civic',
      price: 26200,
      electric: false,
      year: 2023,
      color: 'Gray',
      seats: 5,
      horsepower: 180,
      range: 480,
    },
    {
      make: 'Volkswagen',
      model: 'ID.4',
      price: 41995,
      electric: true,
      year: 2024,
      color: 'White',
      seats: 5,
      horsepower: 275,
      range: 275,
    },
    {
      make: 'Hyundai',
      model: 'Ioniq 6',
      price: 41200,
      electric: true,
      year: 2024,
      color: 'Bronze',
      seats: 5,
      horsepower: 320,
      range: 361,
    },
    {
      make: 'Mazda',
      model: 'CX-5',
      price: 28290,
      electric: false,
      year: 2023,
      color: 'Black Metallic',
      seats: 5,
      horsepower: 187,
      range: 500,
    },
    {
      make: 'Audi',
      model: 'Q4 e-tron',
      price: 52800,
      electric: true,
      year: 2024,
      color: 'Midnight Black',
      seats: 5,
      horsepower: 295,
      range: 275,
    },
    {
      make: 'Kia',
      model: 'EV9',
      price: 54900,
      electric: true,
      year: 2024,
      color: 'Silver',
      seats: 7,
      horsepower: 376,
      range: 304,
    },
    {
      make: 'Mercedes-Benz',
      model: 'C-Class',
      price: 41400,
      electric: false,
      year: 2024,
      color: 'Obsidian Black',
      seats: 5,
      horsepower: 255,
      range: 450,
    },
  ];

  columnDefs: ColDef[] = [
    { field: 'make', editable: true, sortable: true, filter: true, width: 120 },
    { field: 'model', editable: true, sortable: true, filter: true, width: 120 },
    { field: 'price', editable: true, sortable: true, filter: true, width: 100 },
    { field: 'year', editable: true, sortable: true, filter: true, width: 80 },
    { field: 'color', editable: true, sortable: true, filter: true, width: 120 },
    { field: 'seats', editable: true, sortable: true, filter: true, width: 70 },
    { field: 'horsepower', editable: true, sortable: true, filter: true, width: 100 },
    { field: 'range', editable: true, sortable: true, filter: true, width: 80 },
    { field: 'electric', editable: true, sortable: true, filter: true, width: 90 },
  ];

  myGetRowHeight() {
    return 100;
  }

  onCellClicked(event: any) {
    console.log('Cell clicked:', event);
    alert(`Cell clicked: ${event.colDef.field} - ${event.value}`);
  }
}
