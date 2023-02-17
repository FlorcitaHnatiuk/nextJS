import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Navbar } from '../components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Aboutpage() {
    return (
        <>
            <Head>
                <title>englishIT</title>
                <meta name="description" content="about" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div className={styles.description}>
                <h1 className={styles.title}>Contact us</h1>                
                </div>
            </main>
        </>
    )
}