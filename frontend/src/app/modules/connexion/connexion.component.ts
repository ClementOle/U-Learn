import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  username: string;
  password: string;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  submit() {
    this.httpClient.post<any>('http://localhost:8080/login',
      {username: this.username, password: this.password}).subscribe(value => console.log(value));
  }

}
