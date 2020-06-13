
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Event} from '../models/Event.model';
import {User} from '../models/User.model';



@Injectable()
export class AuthService {
  isAuthenticated = localStorage.isAuthenticated; 
  userId  = localStorage.userId;
  token = localStorage.token;

  constructor(private httpClient: HttpClient) { }


  SignUp(SigningUp: FormGroup):Observable<any> {

    const person = {
      userName: SigningUp.get('userName').value,
      email: SigningUp.get('email').value,
      password: SigningUp.get('password2').value
    }



    console.log(person);
    return this.httpClient.post('http://localhost:5000/api/signUp', person);

  }


  connexion(Connexion: FormGroup):Observable<any>  {
    const connexion = {
      email: Connexion.get('email').value,
      password: Connexion.get('password').value
    }

    console.log(connexion);

    return this.httpClient.post('http://localhost:5000/api/login', connexion);
  }


  Verify(code: string,signUp: FormGroup):Observable<any> {
    const info = {
      userName: signUp.get('userName').value,
      code: code,
      email: signUp.get('email').value,
    };

    return this.httpClient.post('http://localhost:5000/sendEmail',info);

  }


  //generate random string for emails ..
   makeid(length : Number) {
     let result = '';
     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     let charactersLength = characters.length;
     for(let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  //get Users from server !

  getUsers(){
    return this.httpClient.get<User[]>('http://localhost:5000/api/getUsers');
  }

  accept(user: User) : Observable<any>{
    console.log(user._id);
    return this.httpClient.get('http://localhost:5000/api/acceptUser/' + user._id);
  }

  rejet(user: User): Observable<any>{
    console.log(user._id);
    return this.httpClient.get('http://localhost:5000/api/rejetUser/' + user._id);
  }

  makeAdmin(user: User) {
    console.log(user._id);
    return this.httpClient.get('http://localhost:5000/api/makeAdmin/' + user._id);
  }

  makeVisiteur(user: User) {
    console.log(user._id);
    return this.httpClient.get('http://localhost:5000/api/makeVisiteur/' + user._id);
  }

  getMemberByIdFromServer() : Observable<any> {
    console.log(this.userId);
    return this.httpClient.get('http://localhost:5000/api/getUser/' + this.userId);
  }
}
