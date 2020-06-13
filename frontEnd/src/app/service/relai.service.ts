import { Injectable } from '@angular/core';
import {Relai} from '../models/Relais.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelaiService {

  private relaiList: Relai[]
  public relai$ = new Subject<Relai[]>();
  constructor(private http: HttpClient , private router: Router) { }



  getRelai() {
    this.http.get('http://localhost:5000/api/relai').subscribe(
      (relaiList: Relai[]) => {
        if (relaiList) {
          this.relaiList = relaiList;
          this.emitRelaiList();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitRelaiList() {
    this.relai$.next(this.relaiList);
  }

  getRelaiById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:5000/api/relai/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewRelai(relai: Relai) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/relai', relai).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  modifyRelai(id: string, relai: Relai) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:5000/api/relai/' + id, relai).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteRelai(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:5000/api/relai/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
