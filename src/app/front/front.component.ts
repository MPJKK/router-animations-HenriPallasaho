import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
})
export class FrontComponent implements OnInit {
  mediaArray: any;

  constructor(public mediaService: MediaService) {
  }

  ngOnInit() {
    // tarkista onko käyttäjä kirjautunut, jotta navigaatio näkyy oikein
    if (localStorage.getItem('token') !== null) {
      this.mediaService.getUserData(localStorage.getItem('token')).
          subscribe(response => {
            console.log(response);
            this.mediaService.logged = true;
          }, (error: HttpErrorResponse) => {
            console.log(error);
          });
    }

    /*this.mediaService.getNew().subscribe( data => {
      console.log(data);
      this.mediaArray = data;
    })*/

    this.mediaService.getAllMedia().subscribe(data => {
      console.log(data);
      this.mediaArray = data;

      this.mediaArray.map(media => {
        const temp = media.filename.split('.');
        media.thumbnail = temp[0] + '-tn320.png';
      });
      console.log(this.mediaArray);
    });
  }

}
