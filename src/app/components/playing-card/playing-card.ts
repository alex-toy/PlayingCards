import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css',
})
export class PlayingCard {
  @Input({required: true}) monster : Monster = new Monster("", 0);
  label : InputSignal<string> = input("label");
  power : InputSignal<number> = input.required();
}
