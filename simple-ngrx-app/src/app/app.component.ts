import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SocialMedia } from './social-media.model';
import { stringify } from 'querystring';

interface AppState {
  socialMedias: SocialMedia[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  socialMedias$: Observable<SocialMedia[]>;

  constructor(private store: Store<AppState>) {
    this.socialMedias$ = this.store.select('socialMedias');
  }

  saveSocialMedia(name: HTMLInputElement, url: HTMLInputElement, creator: HTMLInputElement) {
    this.store.dispatch({ type: 'ADD_SOCIAL_MEDIA', payload: {name: name.value, url: url.value, creator: creator.value}});
  }
}
