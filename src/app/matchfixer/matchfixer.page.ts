import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-matchfixer',
  templateUrl: './matchfixer.page.html',
  styleUrls: ['./matchfixer.page.scss'],
})
export class MatchfixerPage implements OnInit {
  id1: any;
  id2: any;
  url: string;
  fixture: any[]=[];
  constructor(
    //private route: ActivatedRoute,
    //private router: Route
    private storage: Storage,
    public http: HttpClient,
    public navCrl: NavController
    // public httpara: HttpParams
    ) {
      //console.log('helloell');
      /**
        this.storage.get('team1Id').then(paras1 => {
          this.id1=paras1;
        });
        this.storage.get('team2Id').then(paras2 => {
          this.id2=paras2;
        });
        this.delay(1000).then(any=>{
          this.url = 'https://cricppp.herokuapp.com/users/fixtures/'+this.id1+'/'+this.id2;
          this.http.get(this.url).subscribe(response => {
            // console.log(params.toString());
            this.fixture = response["allFixtures"];
            });
        });
      */
     }

  async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log('fired'));
    }

  goconsl(){
    console.log(''+this.id1+''+this.id2);
    console.log(this.url);
  }

  goback(){
    this.navCrl.pop();
    this.navCrl.navigateRoot('/home');
  }

  ngOnInit() {

    this.storage.get('team1Id').then(paras1 => {
      this.id1=paras1;
    });
    this.storage.get('team2Id').then(paras2 => {
      this.id2=paras2;
    });
    this.delay(1000).then(any=>{
      this.url = 'https://cricppp.herokuapp.com/users/fixtures/'+this.id1+'/'+this.id2;
      this.http.get(this.url).subscribe(response => {
        // console.log(params.toString());
        this.fixture = response["allFixtures"];
        console.log(this.fixture[0].note);
        });
        // xxx;
    });
  }

}
