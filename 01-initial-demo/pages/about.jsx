import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Aboutpage() {
    return (
        <>
            <Head>
                <title>englishIT</title>
                <meta property="og:title" name="description" content="about" />
                <meta property="og:title" name="viewport" content="width=device-width, initial-scale=1" />
                <link property="og:title" rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                <h1 className={styles.title}>Who are we?</h1>                
                <Link href='/'>Home</Link>
                </div>
            </main>
        </>
    )
}
