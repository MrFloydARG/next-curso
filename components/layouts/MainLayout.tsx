import { FC } from 'react';

import Head from 'next/head';
import { Navbar } from '../Navbar';

interface propsWithChildren {
  children: React.ReactNode;
}
import styles from './MainLayout.module.css';

export const MainLayout = ({ children }: propsWithChildren): JSX.Element => {
  return (
    <div className={styles.container}>
      {/* este Head es un componente, no es html */}
      <Head>
        <title>Home</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
