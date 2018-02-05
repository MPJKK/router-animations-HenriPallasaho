import {Component, OnInit} from '@angular/core';
import {Media} from '../models/media';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  file = new Media('', '');
  formData = new FormData();

  constructor() {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    const file: File = evt.target.files[0];
    // lisää tiedosto formData-objektiin
  }

  uploadFile() {
    // lisää tekstikenttien sisältö formData-objektiin
    // lähtetä tiedot
}

  ngOnInit() {
  }

}
