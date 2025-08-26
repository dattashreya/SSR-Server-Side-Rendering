import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    
    <h2>This app is SSR'd</h2>
  `,
})
export class App {
  name = 'Angular';
}
