import { css, FlattenSimpleInterpolation } from 'styled-components/macro';

const breakpoints = {
  md: '992px',
} as const;

type RespondTo = {
  [key in keyof typeof breakpoints]: FlattenSimpleInterpolation;
};

export const respondTo = Object.keys(breakpoints).reduce<Partial<RespondTo>>(
  (acc, label) => {
    acc[label] = (
      literals: TemplateStringsArray,
      ...placeholders: string[]
    ) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(literals, ...placeholders)};
      }
    `;
    return acc;
  },
  {},
) as RespondTo;
