import { css } from 'styled-components';

const base = css`
  font-family: 'Roboto';
`;

export const editor = {
  base,
  tiny: css`
    ${base};
    font-size: 10px;
    line-height: 14px;
  `,
  small: css`
    ${base};
    font-size: 12px;
    line-height: 14px;
  `,
  normal: css`
    ${base};
    font-size: 14px;
    line-height: 16px;
  `,
  medium: css`
    ${base};
    font-size: 18px;
    line-height: 21px;
  `,
  large: css`
    ${base};
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
  `,
  huge: css`
    ${base};
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -0.02em;
  `,
};
