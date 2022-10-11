type RequireAtLeastOne<Target, Keys extends keyof Target = keyof Target> =
  Pick<Target, Exclude<keyof Target, Keys>> &
  {
    [Key in Keys]-?: Required<Pick<Target, Key>> & Partial<Pick<Target, Exclude<Keys, Key>>>
  }[Keys]

type RequireOnlyOne<Target, Keys extends keyof Target = keyof Target> =
  Pick<Target, Exclude<keyof Target, Keys>> &
  {
    [Key in Keys]-?: Required<Pick<Target, Key>> & Partial<Record<Exclude<Keys, Key>, never>>
  }[Keys]

export type { RequireAtLeastOne, RequireOnlyOne };
