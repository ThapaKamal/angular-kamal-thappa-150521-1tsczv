import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `Candidate`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
