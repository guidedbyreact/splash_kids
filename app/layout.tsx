import Header from './components/layout/Header';
import Toast from './components/ui/Toast';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Toast />
      </body>
    </html>
  );
}
