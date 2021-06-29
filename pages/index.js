import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
  <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>This is a website.</p>
      <Link href='/Ninjas'>
        <a className={styles.btn}>See Ninja List.</a>
      </Link>
      <Link href='/material'><a>Go to material</a></Link>
    </div>
  </>
  )
}
