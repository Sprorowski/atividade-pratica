import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  contacts: Object[] = [];
  constructor(private ws: ContactService) { }

  ngOnInit(): void {
    this.ws.listContacts().subscribe(contacts => this.contacts = contacts);
  }

}
