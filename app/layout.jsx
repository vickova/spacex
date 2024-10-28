import './globals.css'
import { Rubik } from 'next/font/google';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'SpaceXit',
  description: 'Generate for Checkit.inc by Victoria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className='wrapper'>
          <Navbar/>
          <div className='main'>{children}</div>
        </div>
      </body>
    </html>
  )
}
