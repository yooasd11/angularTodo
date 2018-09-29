import { Action } from 'redux'
import { Injectable } from '@angular/core'
import { Item } from './store';

@Injectable()
export class Actions {
    static ADD = 'ADD';
    static REMOVE = 'REMOVE';       // 아직 안씀

    add(newItem: Item): TodoAction {
        return { type: Actions.ADD, payload: newItem };
    }

    remove() {
        return { type: Actions.REMOVE };
    }
}

export class TodoAction implements Action {
    type: any;
    payload?
}