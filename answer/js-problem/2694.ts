type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  eventMap: Map<string, Callback[]>;
  constructor() {
    this.eventMap = new Map();
  }
  subscribe(eventName: string, callback: Callback): Subscription {
    const cbs = this.eventMap.get(eventName);
    let index = 0;
    if (cbs) {
      index = cbs.push(callback) - 1;
    } else {
      this.eventMap.set(eventName, [callback]);
    }
    return {
      unsubscribe: () => {
        const cbs = this.eventMap.get(eventName);
        const index = cbs!.findIndex((_cb) => _cb === callback);
        if (index != -1) {
          cbs?.splice(index, 1);
        }
        // console.log(cbs)
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    const cbs = this.eventMap.get(eventName);
    if (!cbs) {
      return [];
    }
    return cbs.map((cb) => {
      return cb(...args);
    });
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
