import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  userList: any[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.userItems$.subscribe(
      (response:any)=>{
        this.userList = response;
      }
    )
  
  }
  deleteUser(id:any){
    this._userService.deleteUser(id);
  }
}
