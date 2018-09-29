import { Action } from 'redux'
import { Actions, TodoAction } from './actions';

export interface ITodoState {
    items: Item[];
}

export const INITIAL_STATE: ITodoState = {
    items: []
}

export function reducer(lastState: ITodoState, action: TodoAction): ITodoState {
    console.debug("reducer : ", action.type, action.payload);

    switch (action.type) {
        case Actions.ADD:
        lastState.items.push(action.payload);
        return { items: lastState.items }
        case Actions.REMOVE:
        // TODO : NOT IMPLEMENTED YET
        return { items : lastState.items }
    }
    return lastState;
}

export class Item {
    done: boolean;
    text: string;
}