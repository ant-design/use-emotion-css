import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Button } from 'antd';
import React from 'react';

export default () => {
  const className = useEmotionCss(({ token }) => {
    return {
      color: token.colorPrimary,
      display: 'flex',
      justifyContent: 'center',
      gap: 24,
      padding: 24,
      flexDirection: 'column',
    };
  });
  const blockClassName = useEmotionCss(({ token }) => {
    return {
      backgroundColor: token.colorPrimary,
      width: 12,
      height: 12,
      borderRadius: 12,
    };
  });
  return (
    <div className={className}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div className={blockClassName} />
        <span>Hello World</span>
      </div>
      <div>
        <Button type="primary">按钮</Button>
      </div>
    </div>
  );
};
