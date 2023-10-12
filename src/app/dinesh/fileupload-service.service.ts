import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileuploadServiceService {

  constructor(private http: HttpClient) {}
  url = 'http://localhost:60093/api';

  postfile(data: any) {
    const body = data;
    return this.http.post(`${this.url}/UploadImage`, body);
  }
  getfile() {
    return this.http.get(`${this.url}/GetFileDetails`);
  }

  downloadFile(data: any) {
    return this.http.get(`${this.url}/downloadFile?FileName=` + data);
  }
}
