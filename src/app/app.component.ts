import { Component } from '@angular/core';
import { TeamCreator } from 'team-creator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  max = 5;
  min = 0;
  score= 0;
  player = "";
  players = [];
  teams = {};

  addPlayer(){

    this.players.push({
      name: this.player,
      score: this.score
    });
    this.player = "";
    this.score = 0;

  }

  calc(){
    TeamCreator.setPlayers(this.players);
    this.teams = TeamCreator.createTeams();

    console.log(this.teams);
  }

  remove($event){
    alert($event);
    console.log($event);
  }
}
