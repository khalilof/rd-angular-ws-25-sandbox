import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [
    JsonPipe
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data);
  users = computed(() => {
    const data = this.data();
    return data ? data['users'] : []
  });

}
