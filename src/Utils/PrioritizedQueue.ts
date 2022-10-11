import { ExplicitAny } from "./ExplicitAny";
import { StrictMap } from "./StrictMap";
import { isLastElement } from "./IsLastElement";
import { isEmpty } from "./IsEmpty";
import { makeNonNilable } from "./MakeNonNilable";

abstract class PrioritizedQueueItem {
  abstract get key(): string;

  abstract compare(other: ExplicitAny): number;
}

class PrioritizedQueue<T extends PrioritizedQueueItem> {
  private array: Array<T> = [];
  private map: StrictMap<string, number> = new StrictMap<string, number>();

  public get size(): number {
    return this.array.length;
  }

  private static getParentIndex(index: number): number {
    if (index === 0) {
      return -1;
    }

    return Math.floor((index + 1) / 2) - 1;
  }

  public enqueue(item: T): void {
    this.array.push(item);
    this.map.set(item.key, this.array.length - 1);

    this.checkParentRequirement(this.array.length - 1);
  }

  public dequeue(): T {
    return this.remove(0);
  }

  private replace(index: number, item: T): void {
    this.array[index] = item;
    this.map.replace(item.key, index);

    this.checkParentRequirement(index);
    this.checkChildrenRequirement(index);
  }

  private remove(index: number): T {
    const item = this.array[index];

    this.map.delete(item.key);

    const isLast = isLastElement(this.array, index);

    if (!isEmpty(this.array)) {
      const newItem = makeNonNilable(this.array.pop(), "Queue item");

      if (!isLast && !isEmpty(this.array)) {
        this.replace(index, newItem);
      }
    }

    return item;
  }

  private checkChildrenRequirement(idx: number): void {
    let stop = false;

    while (!stop) {
      const left: number = this.getLeftChildIndex(idx);

      let right: number = left === -1
        ? -1
        : left + 1;

      if (left === -1) {
        return;
      }

      if (right >= this.size) {
        right = -1;
      }

      let minIndex: number;

      if (right === -1) {
        minIndex = left;
      } else {
        minIndex = this.array[left].compare(this.array[right]) < 0
          ? left
          : right;
      }

      if (this.array[idx].compare(this.array[minIndex]) > 0) {
        this.swap(idx, minIndex);

        idx = minIndex; // iteratively instead of recursion for this.checkChildrenRequirement(minIdx);
      } else {
        stop = true;
      }
    }
  }

  private checkParentRequirement(index: number): void {
    let currentIndex = index;
    let parentIdx: number = PrioritizedQueue.getParentIndex(currentIndex);

    while (parentIdx >= 0 && this.array[parentIdx].compare(this.array[currentIndex]) > 0) {
      this.swap(currentIndex, parentIdx);

      currentIndex = parentIdx;
      parentIdx = PrioritizedQueue.getParentIndex(currentIndex);
    }
  }

  private swap(aIndex: number, bIndex: number): void {
    this.map.replace(this.array[aIndex].key, bIndex);
    this.map.replace(this.array[bIndex].key, aIndex);

    const aItem = this.array[aIndex];

    this.array[aIndex] = this.array[bIndex];
    this.array[bIndex] = aItem;
  }

  private getLeftChildIndex(index: number): number {
    const result = ((index + 1) * 2) - 1;

    return result >= this.array.length
      ? -1
      : result;
  }
}

export { PrioritizedQueueItem, PrioritizedQueue };
