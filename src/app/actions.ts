import { Action } from 'redux'
import { Injectable } from '@angular/core'
import { Item, User } from './store';

@Injectable()
export class Actions {
    static ADD = 'ADD';
    static SEARCH = 'SEARCH';

    add(newItem: Item): TodoAction {
        return { type: Actions.ADD, payload: newItem };
    }

    search(newUsers: User[]): GithubAction {
        return { type:Actions.SEARCH, payload: newUsers }
    }
}

export class TodoAction implements Action {
    type: any;
    payload?
}

export class GithubAction implements Action {
    type: any;
    payload?
}