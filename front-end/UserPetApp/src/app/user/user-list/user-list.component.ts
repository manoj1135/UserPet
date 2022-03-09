import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonUtil } from 'src/app/common/CommonUtil';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersList!: User[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'userName', 'password','actions'];
  constructor(private userService:UserService, private router:Router, private commonUtil:CommonUtil, public authService:AuthService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  addUser(){
    this.router.navigateByUrl("/addUser");
  }

  editUser(id:Number){
    this.router.navigate(['/editUser'], { queryParams: { id: id } });
  }

  deleteUser(id:Number){
    this.userService.deleteUser(id).subscribe(resp=>{
      this.commonUtil.showSnackBar("Deleted successfully.");
      this.ngOnInit();
    })
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(resp=>{
      this.usersList = resp;
    })
  }
}
