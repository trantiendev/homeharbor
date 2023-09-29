import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './Components/navbar/Navbar';
import LoginModal from './Components/modals/LoginModal';
import RegisterModal from './Components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
  title: 'HomeHarbor',
  description: 'HomeHarbor',
}

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <LoginModal />
        <RegisterModal />
        <ToasterProvider />
        {children}
      </body>
    </html>
  )
}
