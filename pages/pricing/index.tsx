import Link from 'next/link';

import { MainLayout } from '../../components/layouts/MainLayout';
import { DarkLayout } from '../../components/layouts/DarkLayout';

// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern

// es obligatorio que las páginas tengan el export default
export default function PricingPage() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className={'title'}>
        Ir a <Link href='/'>Home</Link>
      </h1>
      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/pricing/index.jsx</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
