import { Component, OnInit } from '@angular/core';
import { Ireservation } from '../Interfaces/ireservation';

import { ReservationsService } from'../shared/Reservations/reservations.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
reservation:Ireservation;
sub:any;
id:number;
  constructor(private reservationService:ReservationsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.sub=this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];} );
      this.reservationService.reservationDetails(this.id).subscribe(data=>{this.reservation=data;});
  }

}
