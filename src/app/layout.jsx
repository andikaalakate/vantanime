// import { Inter } from 'next/font/google'
import NavBar from '@/components/Utilities/NavBar'
import '@/app/globals.css'
import { Poppins } from 'next/font/google'
import Favicon from '@/components/Utilities/Head/Favicon'
import Footer from '@/components/Utilities/Footer'
import 'animate.css'
import ScrollToTop from '@/components/Utilities/ScrollToTop'
import AudioPlayer from '@/components/AudioPlayer'
const poppins = Poppins({ subsets: ['latin'], weight:'500' })

export const metadata = {
  title: 'Vanta AnimeList',
  description: 'Website AnimeList Indonesia',
  generator: '',
  applicationName: 'VantaTranslation',
  keywords: ['Vanta', 'Translation Indo', 'AnimeList', 'Andika Alakate'],
  authors: [{ name: 'Andika' }, { name: 'Alakate', url: 'https://andika.gadakstd.my.id' }],
  creator: 'Andika Alakate',
  publisher: 'Andika Alakate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Favicon />
      <body
        className={`${poppins.className} scrollbar-thin scrollbar-thumb-color-whity scrollbar-track-color-primary bg-color-secondary animate__animated animate__fadeIn animate__slow`}
      >
        <NavBar />
        {children}
        {/* <Footer /> */}
        <ScrollToTop />
        <AudioPlayer />
      </body>
    </html>
  );
}
