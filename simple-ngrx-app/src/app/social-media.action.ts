import { Action } from '@ngrx/store';
import { SocialMedia } from './social-media.model';

export class AddSocialMediaAction implements Action {
    readonly type = 'ADD_SOCIAL_MEDIA';

    constructor(public payload: SocialMedia) {}
}