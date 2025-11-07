import { Component, OnInit } from '@angular/core';

interface Contract {
  id: string;
  tenant: string;
  property: string;
  startDate: string;
  endDate: string;
  rent: number;
  deposit: number;
  generated: string;
  status: string;
}

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
  standalone: false,
})
export class ContractsPage implements OnInit {
  contracts: Contract[] = [
    {
      id: 'CNT-2024-001',
      tenant: 'Alice Johnson',
      property: 'P-456/2A',
      startDate: '2024-01-15',
      endDate: '2024-12-31',
      rent: 1200,
      deposit: 2400,
      generated: '2024-01-10',
      status: 'Active',
    },
    {
      id: 'CNT-2024-002',
      tenant: 'Michael Chen',
      property: 'P-789/5B',
      startDate: '2024-03-01',
      endDate: '2025-02-28',
      rent: 1500,
      deposit: 3000,
      generated: '2024-02-25',
      status: 'Active',
    },
    {
      id: 'CNT-2024-003',
      tenant: 'Emma Wilson',
      property: 'P-123/3C',
      startDate: '2023-06-01',
      endDate: '2024-10-15',
      rent: 1100,
      deposit: 2200,
      generated: '2023-05-25',
      status: 'Expiring Soon',
    },
  ];

  filteredContracts: Contract[] = [];
  searchTerm = '';

  ngOnInit() {
    this.filteredContracts = [...this.contracts];
  }

  filterContracts() {
    const term = this.searchTerm.toLowerCase();
    this.filteredContracts = this.contracts.filter(
      (c) =>
        c.tenant.toLowerCase().includes(term) ||
        c.id.toLowerCase().includes(term) ||
        c.property.toLowerCase().includes(term)
    );
  }
}
