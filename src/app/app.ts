import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCard } from './components/playing-card/playing-card';
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  imports: [PlayingCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  monster : Monster = new Monster();
}
