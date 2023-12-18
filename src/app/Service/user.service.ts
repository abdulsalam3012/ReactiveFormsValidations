import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: any[] = [];                           // for store a users data
  userSubject = new BehaviorSubject<any[]>([]);
  userItems$: Observable<any[]> = this.userSubject.asObservable();
  constructor() { }

  //get All user
  getUser() {
    return this.userSubject.value;
  }
  // get by id
  getUserById(id: any) {
    var existingUser = this.userList.find(x => x.id == id);
    return existingUser;
  }
  // New save
  saveUser(data: any) {
    this.userList.push(data);
    this.userSubject.next([...this.userList]);
  }
  // existing user update
  editUser(newData: any) {
    var index = this.userList.findIndex(x => x.id == newData?.id);
    if (index !== -1) {
      this.userList[index] = newData;
      this.userSubject.next([...this.userList]);
    }
  }
  // user remove 
  deleteUser(id: any) {
    this.userList = this.userList.filter(x=>x.id != id);
    this.userSubject.next([...this.userList]);
  }
}
