import { Nilable } from "./Nilable";

class StrictMap<K extends string, V> extends Map<K, V> {
  constructor() {
    super();
  }

  set(key: K, value: V): this {
    if (this.has(key)) {
      throw new Error(`Key already set: ${key}`);
    }

    return super.set(key, value);
  }

  replace(key: K, value: V): this {
    return super.set(key, value);
  }

  get(key: K): V {
    if (super.has(key)) {
      return super.get(key) as V;
    }

    throw new Error(`Key was not set: ${key}`);
  }

  find(key: K): Nilable<V> {
    return super.get(key);
  }
}

export { StrictMap };
