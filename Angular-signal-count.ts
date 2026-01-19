count = signal(0);
  increment() {
    this.count.update(currentValue => currentValue + 1);
  }
