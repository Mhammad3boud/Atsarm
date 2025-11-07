import { Component, OnInit } from '@angular/core';

interface Tenant {
  name: string;
  unit: string;
  email: string;
  phone: string;
  property: string;
  rent: number;
  leaseEnd: string;
  emergency: string;
  status: string;
}

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.page.html',
  styleUrls: ['./tenants.page.scss'],
  standalone: false,
})
export class TenantsPage implements OnInit {
  tenants: Tenant[] = [
    {
      name: 'Alice Johnson',
      unit: 'Unit 2A',
      email: 'alice.johnson@email.com',
      phone: '+1-555-0789',
      property: 'Property P-456',
      rent: 1200,
      leaseEnd: '2024-12-31',
      emergency: 'Bob Johnson (+1-555-0790)',
      status: 'Active',
    },
    {
      name: 'Michael Chen',
      unit: 'Unit 5B',
      email: 'michael.chen@email.com',
      phone: '+1-555-0456',
      property: 'Property P-789',
      rent: 1500,
      leaseEnd: '2025-02-28',
      emergency: 'Lisa Chen (+1-555-0457)',
      status: 'Active',
    },
    {
      name: 'Emma Wilson',
      unit: 'Unit 3C',
      email: 'emma.wilson@email.com',
      phone: '+1-555-0321',
      property: 'Property P-123',
      rent: 1100,
      leaseEnd: '2024-10-15',
      emergency: 'Tom Wilson (+1-555-0322)',
      status: 'Expiring Soon',
    },
    {
      name: 'Emma Wilson',
      unit: 'Unit 3C',
      email: 'emma.wilson@email.com',
      phone: '+1-555-0321',
      property: 'Property P-123',
      rent: 1100,
      leaseEnd: '2024-10-15',
      emergency: 'Tom Wilson (+1-555-0322)',
      status: 'Expired',
    },
  ];

  filteredTenants: Tenant[] = [];
  searchTerm = '';
  selectedStatus = 'all';

  ngOnInit() {
    this.filteredTenants = [...this.tenants];
  }

  filterTenants() {
    const term = this.searchTerm.toLowerCase();
    this.filteredTenants = this.tenants.filter((t) => {
      const matchesSearch =
        t.name.toLowerCase().includes(term) ||
        t.email.toLowerCase().includes(term) ||
        t.property.toLowerCase().includes(term);

      const matchesStatus =
        this.selectedStatus === 'all' || t.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }
}
