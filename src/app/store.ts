import { Action } from 'redux';
import { Actions, TodoAction } from './actions';

export interface IState {
    items: Item[];
    users: User[];
}

export const INITIAL_STATE: IState = {
    items: [],
    users: []
};

export function reducer(lastState: IState, action: TodoAction): IState {
    console.log('reducer : ', action.type, action.payload);

    switch (action.type) {
        case Actions.ADD:
            lastState.items.push(action.payload);
            break;

        case Actions.SEARCH:
            lastState.users = action.payload;
            break;
    }
    return {
        items: lastState.items,
        users: lastState.users
    };
}

export class Item {
    done: boolean;
    text: string;
}

export class User {
    login: string;
    avatar_url: string;
    html_url: string;
}
