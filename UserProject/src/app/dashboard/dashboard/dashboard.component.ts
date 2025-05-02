import { Component, OnInit } from '@angular/core';

interface Club {
  id: number;
  name: string;
  president: string;
  contact: string;
  email: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  clubs: Club[] = [
    {
      id: 1,
      name: 'GFG TCET',
      president: 'Akshat Namdev',
      contact: '920232929',
      email: 'chicoaer@gmail.com'
    },
    {
      id: 5,
      name: 'LDAF TCET',
      president: 'temp',
      contact: '34343',
      email: 'afaasd@gmail.com'
    },
    {
      id: 3,
      name: 'Shastra Coding Club',
      president: 'Chitra Pandey',
      contact: '7900040880',
      email: 'chitrapandey0880@gmail.com'
    },
    {
      id: 4,
      name: 'Temp TCET',
      president: 'temp',
      contact: 'ag',
      email: 'temp@gmail.com'
    }
  ];

  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addClub(): void {
    // Implement club addition logic
    console.log('Add club clicked');
  }

  editClub(id: number): void {
    // Implement edit logic
    console.log('Edit club with ID:', id);
  }

  deleteClub(id: number): void {
    // Implement delete logic
    console.log('Delete club with ID:', id);
  }
}
