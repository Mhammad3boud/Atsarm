import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: false
})
export class NotificationsPage implements OnInit {

  notifications = [
    { title: 'System Update', message: 'Your app was updated successfully.', time: '2 hours ago', read: false },
    { title: 'New Message', message: 'You have a new message from Admin.', time: '5 hours ago', read: false },
    { title: 'Event Reminder', message: 'Don’t forget your meeting at 3 PM.', time: '1 day ago', read: true }
  ];

  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {}

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  clearAll() {
    this.notifications = [];
  }

  toggleRead(notif: { read: boolean }) {
    notif.read = !notif.read;
  }
}
