import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

// es obligatorio que las páginas tengan el export default
export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h1 className={'title'}>
        {/* el Link hace un prefetch, salvo que esté esa propiedad en false*/}
        Ir a <Link href='/about'>About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/index.jsx</code>
      </p>
    </MainLayout>
  );
}
