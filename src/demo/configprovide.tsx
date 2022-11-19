import { useEmotionCss } from '@ant-design/use-emotion-css';
import { css } from '@emotion/css';
import { Button, ConfigProvider } from 'antd';
import React, { useState } from 'react';

const Demo = () => {
  const className = useEmotionCss(({ token }) => {
    const style = {
      color: token.colorPrimary,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    };
    return style;
  });
  const blockClassName = useEmotionCss(({ token }) => {
    const style = {
      backgroundColor: token.colorPrimary,
      width: 12,
      height: 12,
    };
    return style;
  });
  return (
    <div className={className}>
      <div className={blockClassName} />
      <span>Hello World</span>
    </div>
  );
};

const colorList = [
  { key: 'techBlue', color: '#1677FF' },
  { key: 'daybreak', color: '#1890ff' },
  { key: 'dust', color: '#F5222D' },
  { key: 'volcano', color: '#FA541C' },
  { key: 'sunset', color: '#FAAD14' },
  { key: 'cyan', color: '#13C2C2' },
  { key: 'green', color: '#52C41A' },
  { key: 'geekblue', color: '#2F54EB' },
  { key: 'purple', color: '#722ED1' },
];

export default () => {
  const [color, setColor] = useState('#1890ff');

  const colorListDom = colorList.map((item) => {
    return (
      <div
        key={item.key}
        className={css({
          backgroundColor: item.color,
          width: 24,
          height: 24,
          borderRadius: 24,
          border: color === item.color ? '4px solid #eee' : undefined,
        })}
        onClick={() => {
          setColor(item.color);
        }}
      />
    );
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color,
        },
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 24,
          padding: 24,
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 8,
            alignItems: 'center',
          }}
        >
          {colorListDom}
        </div>
        <Demo />

        <div>
          <Button type="primary">按钮</Button>
        </div>
      </div>
    </ConfigProvider>
  );
};
