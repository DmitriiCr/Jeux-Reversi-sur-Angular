import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Board_RO,getEmptyBoard,Turn} from '../ReversiDefinitions';


@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlateauComponent implements OnInit {
  @Input() board : Board_RO = getEmptyBoard();
  @Input() turn : Turn = "Player1";
  @Input() playable : boolean[][]= [];
  @Input() nbPionPlayer1 : number = 0;
  @Input() nbPionPlayer2 : number = 0;
  @Output() play = new EventEmitter<[number,number]>();
  
  constructor() {}
  ngOnInit(): void {
  }
  
  PLAY(i:number,j:number): void {
   this.play.emit([i,j]);
  }
}
