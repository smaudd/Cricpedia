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
  venue: any[]=[];
  venueUrl: any;
  player: any[]=[];
  playerUrl: any;
  toss: any[]=[];
  teams: any[]=[];
  //tossUrl: any;
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
    // console.log(this.url);
    // this.fetchVenue();
    // this.fetchPlayer();
    // this.fetchToss();
  }

  goback(){
    this.navCrl.pop();
    this.navCrl.navigateRoot('/home');
  }

  fetchVenue(){
    this.fixture.forEach((item,index) => {
      if(item.status!='NS'){  
      this.venueUrl='https://cricppp.herokuapp.com/users/venue/'+item.venue_id;
      this.http.get(this.venueUrl).subscribe(response => {
        this.venue[index]=response["name"];
        console.log('venue '+this.venue[index]+' '+index);
      });
    }
    else
    {
      this.venue[index]='no venue/no match';
      console.log('venue '+this.venue[index]+' '+index);
    }
    });
  }

  fetchPlayer(){
    this.fixture.forEach((item,index) => {
      if(item.status!='NS'){  
      this.playerUrl='https://cricppp.herokuapp.com/users/player/'+item.man_of_match_id;
      this.http.get(this.playerUrl).subscribe(response => {
        this.player[index]=response["fullname"];
        console.log('player '+this.player[index]+''+index);
      });
    }
    else
    {
      this.player[index]='no pop/no match';
      console.log('player '+this.player[index]+''+index);
    }
    });
  }

  fetchToss(){
    this.fixture.forEach((item,index) => {
      if(item.status!='NS'){  
      //this.tossUrl='https://cricppp.herokuapp.com/users/player/'+item.man_of_match_id;
      this.http.get('https://cricppp.herokuapp.com/users/teams').subscribe(response => {
        this.teams=response["teams"];
        this.teams.forEach((itm,indx) => {
          if(itm.id==item.toss_won_team_id){
            this.toss[index]=itm.name;
            console.log('toss '+this.toss[index]+''+index);
          }
        });
      });
    }
    else
    {
      this.toss[index]='no toss/no match';
      console.log('toss '+this.toss[index]+''+index);
    }
    });
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
        this.fetchVenue();
        this.fetchPlayer();
        this.fetchToss();
        });
        //this.fetchVenue();
        //this.fetchPlayer();
        //this.fetchToss();
    });
  }

}
