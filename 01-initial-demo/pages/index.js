import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Homepage() {
  return (
    <>
      <Head>
        <title>englishIT</title>
        <meta name="home page" content="home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.title}>English IT</h1>
          <Link href='/about'>About</Link>
        </div>
      </main>
    </>
  )
}
