
import './styles/globals.css';
import Nav from './nav';

export const metadata = {
  title: 'BTKOK Frontend',
  description: 'Gemaakt met Next.js 15',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}



