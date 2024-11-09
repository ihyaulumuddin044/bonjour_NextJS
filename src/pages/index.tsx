// import NavbarBody from '@/componets/layouts/Navbar'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* <NavbarBody /> */}
      <div className={inter.className}> bounjour Next Js</div>
    </div>
  )
}
