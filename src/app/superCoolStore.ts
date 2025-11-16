import {computed, EventEmitter} from '@angular/core';
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';


export interface User {
  username: string;
  password: string;
  email: string;
}

const initialState: User = {
  username: 'test',
  password: 'anothertest',
  email: 't@rd.de'
}

const UserStore = signalStore(
  withState(initialState),
  withComputed(
    ({username, email})=>( {
      usernameSignal: computed(() => username()),
      emailSignal: computed(() => email()),
    })),

    withMethods((store) => ({
      changeUserName(newName: string): void {
        patchState(store, (state) => ({ ...state, userName: newName }));
      },
    })
));
