import 'zone.js/dist/zone';
import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templatesUrl: './app.component.html',
})
export class App {
  const showCount = signal(false);
  const count = signal(0);
  const conditionalCount = computed(() => {
    if (showCount()) {
      return `The count is ${count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });
}
