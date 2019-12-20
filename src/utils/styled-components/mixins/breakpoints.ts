export const BREAKPOINTS = {
  md: '992px',
} as const;

type RespondTo = {
  [key in keyof typeof BREAKPOINTS]: string;
};

export const respondTo = Object.keys(BREAKPOINTS).reduce<Partial<RespondTo>>(
  (acc, label) => {
    acc[label] = `@media (min-width: ${BREAKPOINTS[label]})`;
    return acc;
  },
  {},
) as RespondTo;
