import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from './../../providers/auth-service/auth-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class UserService {
  
  constructor(private http: Http) { }

  private users: User[];

  usersUrl = 'http://rest.learncode.academy/api/dyegoabrantes/users';

  
}
