import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Landing } from '../components/Landing'

export default function Home({productos}) {
  return (
    <>
    <Head>
    <title>Chillin | Lentes de Sol</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Landing productos={productos}/>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://crypton.cl/api/productos')
  const data = await response.json()
  console.log("Data from ServerSide props", response);
  return {
    props: {
      productos: data
    },
    revalidate: 30,
  }
}