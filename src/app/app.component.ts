import { Component, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IaService } from './ia.service';
import { ReversiGameEngineService } from './reversi-game-engine.service';
import { GameState, GameStatePlus, getEmptyBoard} from './ReversiDefinitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent { 
 canPlay : boolean[][] = getEmptyBoard().map(L => L.map( () => false ));

 constructor(public RGS: ReversiGameEngineService, private ia: IaService) {
  this.RGS.gameStateObs.subscribe( g=>  {
    this.canPlay = this.RGS.board.map((L,i)=> L.map((C,j) => this.colorWhereCanPlay(i,j)))
  })
  }

  get board() {return this.RGS.board}
  get turn() {return this.RGS.turn}
  
 
  onClick(i:number, j:number):void{
    this.RGS.play(i,j);  
  }

  charTo(s : String): String{
    let str ="";
    switch(s){
      case "Player1" : 
       str = "X";
      break;
      case "Player2" : 
      str= "O"
      break;
      case "Empty" : 
       str = "";
      break;
    }
    return str;
  }
  countPionoPlayer1(s : String): number{
    let cmp =0;
    for(let L of this.board){
      for(let c of L){
        if(c=="Player1" && s =="X"){
          cmp++;
    }
  }
}
return cmp;
}

countPionoPlayer2(s : String): number{
  let cmp =0;
  for(let L of this.board){
    for(let c of L){
      if(c=="Player2" && s =="O"){
        cmp++;
  }
}
}
return cmp;
}

nbPionPlayer2 : number = 0;
colorWhereCanPlay(i:number,j:number) : boolean{
 let color =false;
 const L  = this.RGS.whereCanPlay();
 for(let e of L){
   if(e[0] == i && e[1]==j ){
     color = true;
   }
 }
 return color;
}
  
RestartPartie():void {
  this.RGS.restart();
}
  
  }
