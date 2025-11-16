import { ResolveFn } from '@angular/router';
import {inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export const usersResolver: ResolveFn<any> = async  (route, state) => {
  const httpClient =  inject(HttpClient);

  return httpClient.get('https://dummyjson.com/users');

};
