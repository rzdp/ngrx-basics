import { Action } from '@ngrx/store';
import { SocialMedia } from './social-media.model';
import { AddSocialMediaAction } from './social-media.action';

const initialState: SocialMedia[] = [
    {
        name: 'Facebook',
        url: 'https://facebook.com',
        creator: 'Mark Zuckerburg'
    }
];


export function socialMediaReducer(state: SocialMedia[] = initialState, action: AddSocialMediaAction) {
    console.log(action.type, state);
    switch(action.type) {
        case 'ADD_SOCIAL_MEDIA':
            return [...state, action.payload];
        default:
            return initialState;
    }
}
