import { Component, OnInit, OnDestroy, Input } from '@angular/core';
// import { Router } from '@angular/router';
import { FollowService } from '../../../services/follow.service';
import { size } from 'lodash';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  @Input() user; // a user who can be followed;
  @Input() currentUser; // currently logged in user;

  followerCount: number;
  isFollowing: boolean;

  followers;
  following;

  constructor(private followSvc: FollowService, db: AngularFireDatabase) {
  }

  ngOnInit() {
    const userId = this.user;
    const currentUserId = this.currentUser;
    // checks if the currently logged in user is following this.user
    this.following = this.followSvc.getFollowing(currentUserId, userId).valueChanges().subscribe
      (following => {
        // this.isFollowing = following;
      });

    this.followers = this.followSvc.getFollowers(userId).valueChanges().subscribe
      (followers => {
        this.followerCount = this.countFollowers(followers);
      });
  }

  private countFollowers(followers) {
    if (followers === null) { return 0; } else { return size(followers); }
  }

  toggleFollow() {
    const userId = this.user;
    const currentUserId = this.currentUser;

    if (this.isFollowing) { this.followSvc.unfollow(); } else { this.followSvc.follow(currentUserId, userId); }
  }

  ngOnDestroy() {
    this.followers.unsubscribe();
    this.following.unsubscribe();
  }

}
