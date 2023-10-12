import { Component } from '@angular/core';
import { FileuploadServiceService } from '../fileupload-service.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {
  selectedFile!: File;
  obtdata: any;
  displayedColumns: string[] = ['Name', 'Actions'];
  constructor(private serv: FileuploadServiceService) {}
  ngOnInit(): void {
    this.getdata();
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onSubmit(): void {
    const reader = new FileReader();
    reader.readAsArrayBuffer(this.selectedFile);
    reader.onload = () => {
      const blob = new Blob([reader.result ? reader.result : ''], {
        type: this.selectedFile.type,
      });

      this.uploadfile(blob);
    };
  }
  uploadfile(blob: Blob): void {
    let formData = new FormData();
    formData.set('file', blob, this.selectedFile.name);
    this.serv.postfile(formData).subscribe((data) => {
      this.getdata();
    });
  }
  getdata() {
    this.serv.getfile().subscribe((data: any) => {
      this.obtdata = data.Table;
    });
  }
  download(Name: string) {
    this.serv.downloadFile(Name).subscribe((data: any) => {
      let link = document.createElement('a');
      link.href = 'data:' + data.ContentType + ';base64,' + data.ToBase64String;
      link.download = data.FileName;
      link.click();
    });
  }
}
