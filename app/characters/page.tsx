import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const style = {
  main: `flex min-h-screen flex-col items-center justify-between p-24`
}

export default function About() {
  return (
    <main className={style.main}>
      <h1>About page</h1>
      <Link href={"/"}>Back to homepage</Link>
    </main>
  )
}
