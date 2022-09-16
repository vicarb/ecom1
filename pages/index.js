import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Landing } from '../components/Landing'

export default function Home({productos}) {
  return (
    <div className>
      <Landing productos={productos}/>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://crypton.cl/api/productos')
  const data = await response.json()
  console.log("Data from ServerSide props", response);
  return {
    props: {
      productos: data
    }
  }
}