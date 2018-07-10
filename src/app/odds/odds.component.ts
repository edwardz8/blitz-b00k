import { Component, OnInit } from '@angular/core';
import { OddsService } from '../services/odds.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BetDialogComponent } from '../bet-dialog/bet-dialog.component';

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {
  // odds: Odds;
  PlaceBetDialogRef: MatDialogRef<BetDialogComponent>;

  constructor(private oddsService: OddsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.oddsService.getOdds().subscribe(() => {
      //
    });
  }

  openDialog() {
    this.dialog.open(BetDialogComponent, {
      height: '420px',
      width: '360px',
      data: {
        //
      }
    });
  }
}
