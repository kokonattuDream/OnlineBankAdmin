import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentList: Object[];

  constructor(private appointmentSevice: AppointmentService) { 
    this.getAppointmentList();
  }

  getAppointmentList(){
    this.appointmentSevice.getAppointmentList().subscribe(
      res => {
        this.appointmentList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
      },
      error => console.log(error)
    );
  }

  confirmAppointment(id: number){
    this.appointmentSevice.confirmAppointment(id).subscribe();
    location.reload();
  }

  ngOnInit() {
  }

}
