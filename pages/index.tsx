import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>@spoonkwon</title>
        {/*<meta httpEquiv="refresh" content="0; url=/100" />*/}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>@spoonkwon</h1>

        <div className={styles.grid}>
          <Link href="/100">
            <a className={styles.card}>
              <h2>백일 기념 사진 &rarr;</h2>
              <p>백일 기념 사진 보기</p>
            </a>
          </Link>

          <a href="https://www.instagram.com/spoonkwon/" className={styles.card}>
            <h2>인스타그램 &rarr;</h2>
            <p>숟가락 인스타그램 방문 (비공개)</p>
          </a>

          <a href="https://www.youtube.com/channel/UCiJ65iLznT6eX8UbrMYt8UA" className={styles.card}>
            <h2>유튜브 &rarr;</h2>
            <p>숟가락 유튜브 채널 보기</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        &copy;mStorm.
      </footer>
    </div>
  )
}

export default Home
