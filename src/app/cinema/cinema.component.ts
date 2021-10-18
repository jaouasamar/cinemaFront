import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  public villes: Object | undefined;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("/localhost:8070/villes").subscribe
    (
      data=>{
        this.villes=data;

    },
      err=>{
        console.log(err);
      });
  }

}
