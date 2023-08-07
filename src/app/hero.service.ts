import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { IHero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient,) { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    // let data = this.http.get<IHero[]>("--------url--------")
    //   .pipe(
    //     tap(_ => this.messageService.add('fetched heroes')),
    //     catchError(this.handleError<IHero[]>('getHeroes', []))
    //   );

    this.messageService.add("HeroService: fetched heroes")
    return heroes;
  }

  getHero(id: number): Observable<IHero | undefined> {
    const hero = HEROES.find(h => h.id === id);
    this.messageService.add("HeroService: fetched heroes");

    return of(hero);
  }


  /** PUT: update the hero on the server */
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  // updateHero(hero: IHero): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }


  // it pull in hero.component.html
  // <div>
  // <label for= "new-hero" > Hero name: </label>
  //   < input id = "new-hero" #heroName />

  //     <!--(click) passes input value to add() and then clears the input-- >
  //       <button type="button" class="add-button"(click) = "add(heroName.value); heroName.value=''" >
  //         Add hero
  //           < /button>
  //           < /div>

  // it pull in hero.component.ts
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  /** POST: add a new hero to the server */
  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }



  // it pull in hero.component.ts
  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero.id).subscribe();
  // }

  /** DELETE: delete the hero from the server */
  // deleteHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;

  //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
