import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-selecteam',
  templateUrl: './selecteam.page.html',
  styleUrls: ['./selecteam.page.scss'],
})
export class SelecteamPage implements OnInit {
  post: any[]=[];
  
  constructor(
    public modalController: ModalController,
    public http: HttpClient
    ) {
    this.http.get('../assets/teams.json').subscribe(response => {
    // this.http.get('https://cricppp.herokuapp.com/users/teams').subscribe(response => {
    // console.log(response);
      this.post = response["teams"];
    })
  }
  teamidd: any;
  giveTeamid(event: any){
    this.teamidd = event.target.id;
    //console.log(''+this.teamidd);
    this.closeModal();
  }
  async closeModal(){
    await this.modalController.dismiss(this.teamidd);
  }

  ngOnInit() {
  }

}
