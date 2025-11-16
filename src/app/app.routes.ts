import { Routes } from '@angular/router';
import { Products } from './routing/products/products';
import { ProductDetailsComponent } from './routing/product-details/product-details';
import {Todos} from './todos/todos';
import {NotToodos} from './not-toodos/not-toodos';
import {RxjsPlay} from './rxjs-play/rxjs-play';
import {Users} from './guard-resolve-interceptor/users/users';
import {usersResolver} from './guard-resolve-interceptor/users-resolver';
import {loggedInGuard} from './guard-resolve-interceptor/logged-in-guard';
import {NotAllowed} from './guard-resolve-interceptor/not-allowed/not-allowed';
import {HelloMaterial} from './material-design/hello-material/hello-material';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: Products },
  { path: 'products/:name',
    //lazy loading
    loadComponent: () => import('./routing/product-details/product-details').then(c => c.ProductDetailsComponent)
  },
  { path: 'todos', component: Todos },
  { path: 'no-todos', component: NotToodos },
  { path: 'rxjs', component: RxjsPlay },
  { path: 'users',
    resolve: {users: usersResolver},
    canActivate: [loggedInGuard],
    component: Users
  },
  { path: 'hello-material',
    component: HelloMaterial
  },
  { path: 'not-allowed',
    component: NotAllowed
  },
  { path: '**', redirectTo: 'products' }
];
