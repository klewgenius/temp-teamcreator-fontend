import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  max = 100;
  min = 0;
  score= 0;
  player = "";
  players = [];

  addPlayer(){

    this.players.push({
      name: this.player,
      score: this.score
    });
    this.player = "";
    this.score = 0;
  }

  remove($event){

    alert($event);
    console.log($event);

  }
}
