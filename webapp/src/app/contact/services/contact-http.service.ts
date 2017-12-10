import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactHttpService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:53523/api/contacts';
  }

  get(): Observable<Contact[]> {
    return this.http.get(this.url).map((response) => {
      return response as Contact[];
    });
  }

  getById(id: number): Observable<Contact> {
    return this.http.get(this.url + '/' + id).map((response) => {
      return response as Contact;
    });
  }

  create(contact: Contact): Observable<Contact> {
    return this.http.post(this.url, contact).map(contact => {
      return contact as Contact;
    });
  }

  update(contact: Contact): Observable<any> {
    return this.http.put(this.url + '/' + contact.id, contact);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

}
