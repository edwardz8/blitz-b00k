import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OddsService } from '../services';
import { AngularFireDatabase } from 'angularfire2/database';
import { GameOdds } from '../models/game-odds';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  @Input() gameOdds: GameOdds;
  // PlaceBetDialogRef: MatDialogRef<BetDialogComponent>;

  isBookmarked = false;

  constructor(private oddsService: OddsService, public db: AngularFireDatabase) { }

  ngOnInit() {
    const odds = this.db.list('odds').valueChanges();
    this.oddsService.getOdds().subscribe(() => {
    });
  }

  toggleBookmark() {
    this.isBookmarked = !this.isBookmarked;
     // saves bet to profile to your profile page so other people can visit your profile and see
    // all the bets you have bookmarked.
  }

  toggleComments() {
    //
  }

}
