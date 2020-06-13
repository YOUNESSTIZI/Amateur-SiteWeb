import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Event} from '../models/Event.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';



@Injectable()
export class MethodsService {
  dateEvent : Date;

  constructor(private httpClient: HttpClient) { }




  envoyerImage(name: string, image: File, imageName: string) {
    // cette method va utiliser le formData to send a single picture to server
    console.log('Image Uploading Process...');

    const uploadData = new FormData();
    uploadData.append(name, image, imageName);
    this.httpClient.post('http://localhost:5000/api/image', uploadData)
      .subscribe(res => {
        console.log(res);
      });
  }

  envoyerEvenement(eventCreate: FormGroup, image: File):Observable<any> {

    const event = new FormData();

    event.set('title', eventCreate.get('title').value);
    event.set('detail', eventCreate.get('detail').value);
    event.set('date', this.dateEvent.toDateString());
    event.set('image',image);
    console.log(event);
    return this.httpClient.post('http://localhost:5000/api/event', event);

  }
  setDate(date:Date){
    this.dateEvent = date ;
  }
  getEventsFromServer(): Observable<Event[]> {
    return this.httpClient.get<Event[]>('http://localhost:5000/api/getEvents');
  }

  getImageFromServer(imagePath): Observable<File> {
    return this.httpClient.get<File>('http://localhost:5000/api/getImage?imagePath=' + imagePath);
  }

  deleteEvent(event: Event): Observable<any>{
    const baseUrl = 'http://localhost:5000/api/deleteEvent/';
    return this.httpClient.delete(baseUrl + event._id);
}

    editEvenement(FileChanged: boolean, eventCreate: FormGroup, selectedFile: File, id: Number) {

    const event = new FormData();
    // @ts-ignore
      event.set('id', id);
    event.set('title', eventCreate.get('title').value);
    event.set('detail', eventCreate.get('detail').value);
    event.set('date', eventCreate.get('date').value);
    if(FileChanged==true){
      event.set('image',selectedFile);
      console.log('the file is changed');
    }
    console.log(event);
    return this.httpClient.put('http://localhost:5000/api/editEvent', event);
  }


  getEvent(_id: string) {
      return this.httpClient.get<Event>('http://localhost:5000/api/getEvent/' + _id);
  }
}
