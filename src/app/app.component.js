"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TeamCreator_1 = require("TeamCreator");
var AppComponent = (function () {
    function AppComponent() {
        this.max = 100;
        this.min = 0;
        this.score = 0;
        this.player = "";
        this.players = [];
    }
    AppComponent.prototype.addPlayer = function () {
        this.players.push({
            name: this.player,
            score: this.score
        });
        this.player = "";
        this.score = 0;
        var players = [{ "name": "Andres", "score": 6 }];
        TeamCreator_1.setPlayers(players);
        alert(createTeams());
    };
    AppComponent.prototype.remove = function ($event) {
        alert($event);
        console.log($event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
