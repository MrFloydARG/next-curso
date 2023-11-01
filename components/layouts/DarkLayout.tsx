import { FC } from 'react';

interface propsWithChildren {
  children: React.ReactNode;
}
export const DarkLayout = ({ children }: propsWithChildren): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '10px',
        borderRadius: '5px',
      }}>
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
