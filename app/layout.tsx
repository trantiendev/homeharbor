import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './Components/navbar/Navbar';
import LoginModal from './Components/modals/LoginModal';
import RegisterModal from './Components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './Components/modals/RentModal/RentModal';

export const metadata = {
  title: 'HomeHarbor',
  description: 'HomeHarbor',
}

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar currentUser={currentUser} />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <ToasterProvider />
        {children}
      </body>
    </html>
  )
}
