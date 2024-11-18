import { ClerkProvider } from '@clerk/nextjs';
import Header from './components/layout/Header';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className={inter.className}>
          <Header />
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
