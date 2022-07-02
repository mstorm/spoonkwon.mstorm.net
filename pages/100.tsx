import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Dojin100.module.css'

import _ from 'lodash'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const title = '권도진 백일'
const description = '사랑스러운 도진이가 태어난 지 백일이 되었습니다. 건강하고 바르게 키우겠습니다.'
const url = 'https://spoonkwon.mstorm.net/100'

const imagePath = '/dojin100'
const mainImage = 'https://spoonkwon.mstorm.net/dojin100/A26380-138.jpg'
const images: string[] = [
  'A26380-087.jpg',
  'A26380-098.jpg',
  'A26380-120.jpg',
  'A26380-129.jpg',
  'A26380-138.jpg',
  'IMG_0570.jpg',
  'IMG_1191.jpg',
  'IMG_1673.jpg',
  'IMG_1700.jpg',
  'IMG_1853.jpg',
  'IMG_1890.jpg'
]

const config = {
  dots: true,
  layLoad: true,
  infinite: true,
  speed: 1500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  // centerMode: true,
  draggable: true,
  mobileFirst: true,
  backgroundColor: "#333",
  height: "100%"
}

const Home100: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={mainImage} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
      </Head>

      <main className={styles.main}>
        <Slider {...config}>
          {_.map(images, (o, i) => <div key={i} aria-label={o}>
            <img src={[imagePath, o].join('/')} alt={o} />
          </div>)}
        </Slider>
      </main>
    </div>
  )
}

export default Home100
