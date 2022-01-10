import { ObserverList } from './ObserverList.js';
import { Observer } from './Observer.js';

export class Subject {
  constructor() {
    this.observers = new ObserverList();
  }

  addObserver = function(observer) {
    this.observers.add(observer);
  }

  removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  }

  notify = function(context) {
    const observerCount = this.observers.count();
    // const observerCount = this.observersCount;
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  }
  
  // get observerCount() { return this.observers.count.bind(this)}
}

{ Subject }