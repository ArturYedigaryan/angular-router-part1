import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {PersonInterface} from '../types/person.interface';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private people: PersonInterface [] = [
    {
      id: 1,
      name: 'Artur'
    },
    {
      id: 2,
      name: 'Nar'
    },
    {
      id: 3,
      name: 'Dav'
    }
  ];

  constructor() {}

  getPersonById(personId: number): Observable<PersonInterface> {
    return of(this.people.find(x => x.id === personId));
  }

  getAll(): Observable<PersonInterface[]> {
    return of(this.people);
  }

  save(person: PersonInterface): Observable<boolean> {
    const p = this.people.find(x => x.id === person.id);
    if (p) {
      p.name = person.name;
    }

    return of(true).pipe(delay(1000));
  }
}
