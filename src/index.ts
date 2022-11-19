import { css, CSSInterpolation } from '@emotion/css';
import { theme } from 'antd';

export type { CSSInterpolation } from '@emotion/css';

export type Theme = ReturnType<typeof theme.useToken>;

export type cssFunction = (
  token: Theme,
) => CSSInterpolation | Array<CSSInterpolation>;

export const useEmotionCss = (cssFn: cssFunction) => {
  const token = theme.useToken();
  return css(cssFn(token));
};
