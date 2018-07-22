import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private db: AngularFireDatabase) {
    db.list<User>('user').valueChanges();
   }

  getFollowers(userId: string) {
    return this.db.object(`followers/${userId}`);
  }

  getFollowing(followerId: string, followedId: string ) {
    return this.db.object(`following/${followerId}/${followedId}`);
  }

  follow(followerId: string, followedId: string) {
    this.db.object(`followers/${followedId}`).update({ [followerId]: true});
    this.db.object(`following/${followerId}`).update({ [followedId]: true});
  }

  unfollow() {
  }
}
