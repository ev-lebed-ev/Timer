class StrictSet<K> extends Set<K> {
  constructor() {
    super();
  }

  add(value: K): this {
    if (this.has(value)) {
      throw new Error(`Value already added: ${value}`);
    }

    return super.add(value);
  }

  replace(value: K): this {
    return super.add(value);
  }
}

export { StrictSet };
