import { MatchfixerPage } from './../matchfixer/matchfixer.page';
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelecteamPage } from './../selecteam/selecteam.page';
import { NavigationExtras, Route, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public modalController: ModalController,
    public navCrl: NavController,
    public router: Router,
    private storage: Storage) {
        this.storage.clear().then(() => {
        console.log('all keys cleared');
      });
    }

  //teamId: any;
  teamId1: any;
  teamId2: any;
  team1 = 'Select Team 1';
  team2 = 'Select Team 2';
  
  goFindmatch() {
    // this.navCrl.navigateRoot('/matchfixer');  
    /**let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user)
      }
    }
    this.router.navigate(['/matchfixer'], navigationExtras)**/
    // this.openDetails(this.teamId1,this.teamId2)
    console.log(''+this.teamId1);
    console.log(''+this.teamId2);
    this.storage.set('team1Id', this.teamId1);
    this.storage.set('team2Id', this.teamId2);
    this.navCrl.navigateRoot(['/matchfixer']);
  }


/**
  async openDetails(param1: any, param2: any) {
    await this.storage.set('team1id', param1);
    await this.storage.set('team2id', param2);
    await this.navCrl.navigateRoot(['/matchfixer']);
}
**/


  async showModal2() {
    const modal = await this.modalController.create({
      component: SelecteamPage,
      cssClass: 'custom-modal-css',
      // componentProps: { teamidd: this.teamidd }
    });

    modal.onDidDismiss()
      .then((dataReturned) => {
        //this.teamId = dataReturned.data;
        if(dataReturned.data==47)
    {
      this.team2='Adelaide Strikers';
      this.teamId2 = dataReturned.data;
    }
        if(dataReturned.data==48)
    {
      this.team2='Brisbane Heat';
      this.teamId2 = dataReturned.data;
    }
        if(dataReturned.data==49)
    {
      this.team2='Hobart Hurricanes';
      this.teamId2 = dataReturned.data;
    }
        if(dataReturned.data==50)
    {
      this.team2='Melbourne Renegades';
      this.teamId2 = dataReturned.data;
    }
        if(dataReturned.data==51)
    {
      this.team2='Melbourne Stars';
      this.teamId2 = dataReturned.data;
    }
        if(dataReturned.data==52)
    {
      this.team2='Perth Scorchers';
      this.teamId2 = dataReturned.data;
    }
        if(dataReturned.data==53)
    {
      this.team2='Sydney Sixers';
      this.teamId2 = dataReturned.data;
    }
        if(dataReturned.data==54)
    {
      this.team2='Sydney Thunder';
      this.teamId2 = dataReturned.data;
    }
        // console.log(''+user);
    });

    return await modal.present();
  }





  async showModal1() {
    const modal = await this.modalController.create({
      component: SelecteamPage,
      cssClass: 'custom-modal-css',
      // componentProps: { teamidd: this.teamidd }
    });

    modal.onDidDismiss()
      .then((dataReturned) => {
        //this.teamId = dataReturned.data;
        if(dataReturned.data==47)
    {
      this.team1='Adelaide Strikers';
      this.teamId1 = dataReturned.data;
    }
        if(dataReturned.data==48)
    {
      this.team1='Brisbane Heat';
      this.teamId1 = dataReturned.data;
    }
        if(dataReturned.data==49)
    {
      this.team1='Hobart Hurricanes';
      this.teamId1 = dataReturned.data;
    }
        if(dataReturned.data==50)
    {
      this.team1='Melbourne Renegades';
      this.teamId1 = dataReturned.data;
    }
        if(dataReturned.data==51)
    {
      this.team1='Melbourne Stars';
      this.teamId1 = dataReturned.data;
    }
        if(dataReturned.data==52)
    {
      this.team1='Perth Scorchers';
      this.teamId1 = dataReturned.data;
    }
        if(dataReturned.data==53)
    {
      this.team1='Sydney Sixers';
      this.teamId1 = dataReturned.data;
    }
        if(dataReturned.data==54)
    {
      this.team1='Sydney Thunder';
      this.teamId1 = dataReturned.data;
    }
        // console.log(''+user);
    });

    return await modal.present();
  }

}
