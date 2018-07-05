import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

    items: Array<any> = [];

    constructor() {
      this.items = [
        { id: '', logo: 'assets/images/vols.png', team: 'TN', record: '4-0', score1: '21', score2: '7', kickoff: '7PM' },
        { id: '', logo: 'assets/images/vandy.png', team: 'VAN', record: '2-2', score1: '21', score2: '7', kickoff: '7PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'LSU', record: '3-1', score1: '21', score2: '7', kickoff: '12PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'AL', record: '4-0', score1: '21', score2: '7', kickoff: '8PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'FL', record: '0-4', score1: '21', score2: '7', kickoff: '3PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'MISS', record: '2-2', score1: '21', score2: '7', kickoff: '11PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'AUB', record: '2-3', score1: '21', score2: '7', kickoff: '4PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'TN', record: '4-0', score1: '21', score2: '7', kickoff: '7PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'TN', record: '3-1', score1: '21', score2: '7', kickoff: '12PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'TN', record: '2-2', score1: '21', score2: '7', kickoff: '8PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'TN', record: '0-3', score1: '21', score2: '7', kickoff: '3:30PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'TN', record: '1-4', score1: '21', score2: '7', kickoff: '7PM' },
        { id: '', logo: 'assets/images/vols.png', team: 'TN', record: '1-3', score1: '21', score2: '7', kickoff: '10PM' },
      ];
    }
}
