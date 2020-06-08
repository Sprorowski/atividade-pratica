import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  form;
  constructor( private formBuilder: FormBuilder, private ws: ContactService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:[''],
      email: [''],
      fone: [''],
      adress: [''],
     })
  }
  salvar(){
    let params = {
      name: this.form.get('name').value,
      email:this.form.get('email').value,
      fone: this.form.get('fone').value,
      adress:this.form.get('adress').value,
    };
    console.log(params);

    this.ws.newContact(params).subscribe();

  }

}
