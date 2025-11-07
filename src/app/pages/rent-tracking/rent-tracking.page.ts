import { Component, OnInit } from '@angular/core';

interface RentRecord {
  tenant: string;
  property: string;
  month: string;
  dueDate: string;
  amount: number;
  status: string;
  paidDate?: string;
  method?: string;
}

@Component({
  selector: 'app-rent-tracking',
  templateUrl: './rent-tracking.page.html',
  styleUrls: ['./rent-tracking.page.scss'],
  standalone: false,
})
export class RentTrackingPage implements OnInit {
  records: RentRecord[] = [
    {
      tenant: 'Alice Johnson',
      property: 'P-456/2A',
      month: '2024-09',
      dueDate: '2024-09-01',
      amount: 1200,
      status: 'Paid',
      paidDate: '2024-09-01',
      method: 'Bank Transfer',
    },
    {
      tenant: 'Michael Chen',
      property: 'P-789/5B',
      month: '2024-09',
      dueDate: '2024-09-01',
      amount: 1500,
      status: 'Paid',
      paidDate: '2024-09-03',
      method: 'Check',
    },
    {
      tenant: 'Emma Wilson',
      property: 'P-123/3C',
      month: '2024-09',
      dueDate: '2024-09-01',
      amount: 1100,
      status: 'Overdue',
    },
    {
      tenant: 'Alice Johnson',
      property: 'P-456/2A',
      month: '2024-10',
      dueDate: '2024-10-01',
      amount: 1200,
      status: 'Pending',
    },
  ];

  filteredRecords: RentRecord[] = [];
  searchTerm = '';
  selectedStatus = 'all';
  selectedMonth = 'all';

  ngOnInit() {
    this.filteredRecords = [...this.records];
  }

  filterRecords() {
    const term = this.searchTerm.toLowerCase();

    this.filteredRecords = this.records.filter((r) => {
      const matchesSearch =
        r.tenant.toLowerCase().includes(term) ||
        r.property.toLowerCase().includes(term);

      const matchesStatus =
        this.selectedStatus === 'all' || r.status === this.selectedStatus;

      const matchesMonth =
        this.selectedMonth === 'all' || r.month === this.selectedMonth;

      return matchesSearch && matchesStatus && matchesMonth;
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Paid': return 'success';
      case 'Pending': return 'warning';
      case 'Overdue': return 'danger';
      default: return 'medium';
    }
  }
}
