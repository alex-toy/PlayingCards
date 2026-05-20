import { Component, signal } from '@angular/core';
import { PlayingCard } from './components/playing-card/playing-card';
import { Monster } from './models/monster.model';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [PlayingCard, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  monsters : Monster[] = [
    new Monster("alex", 19),
    new Monster("seb", 76),
    new Monster("kate", 17),
    new Monster("joe", 85),
  ];
  count: number = 0;
  search = 'initial';

  incrementCounter(){
    this.count++;
  }
}
