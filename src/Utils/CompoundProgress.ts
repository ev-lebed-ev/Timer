import { StrictMap } from "./StrictMap";
import { Nilable } from "./Nilable";
import { roundDecimals } from "./RoundDecimals";
import { isNil } from "./IsNil";
import { OnProgress } from "./OnProgress";
import { sumArray } from "./SumArray";

class CompoundProgress<T extends string> {
  private progress: StrictMap<string, number> = new StrictMap<string, number>();
  private readonly onProgress: OnProgress;

  constructor(
    private tasks: StrictMap<T, number>,
    onProgress: OnProgress,
  ) {
    this.onProgress = this.throttleByTime(this.throttleByValue(onProgress));

    const fractionsSum = sumArray(
      Array.from(this.tasks.values()),
      (fraction) => fraction,
    );

    if (fractionsSum !== 1) {
      throw new Error("Tasks fractions sum must equals 1");
    }

    const taskKeys = Array.from(this.tasks.keys());

    for (let i = 0; i < taskKeys.length; i++) {
      this.progress.set(taskKeys[i], 0);
    }
  }

  private throttleByValue(onProgress: OnProgress): OnProgress {
    let lastProgress: Nilable<number> = null;

    return (progress) => {
      const roundedProgress = roundDecimals(progress, 2);

      if (isNil(lastProgress) || roundedProgress !== lastProgress) {
        onProgress(roundedProgress);
      }

      lastProgress = roundedProgress;
    };
  }

  private throttleByTime(onProgress: OnProgress): OnProgress {
    const delta = 100;

    let lastTimestamp = Date.now();

    return (progress) => {
      if (progress === 0 || progress === 1) {
        onProgress(progress);

        return;
      }

      const currentTimestamp = Date.now();

      if (lastTimestamp < currentTimestamp - delta) {
        lastTimestamp = currentTimestamp;

        onProgress(progress);
      }
    };
  }

  public onTaskProgress(task: T): OnProgress {
    return (progress) => {
      this.progress.replace(task, progress * this.tasks.get(task));

      this.onProgress(sumArray(Array.from(this.progress.values()), (item) => item));
    };
  }
}

export { CompoundProgress };
