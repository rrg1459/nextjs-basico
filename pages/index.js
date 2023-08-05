// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import { useEffect, useState } from "react"

// const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  const [divisas, setDivisas] = useState({});

  useEffect(() => {
    setDivisas({ date: "Jueves, 10 Agosto  1967", dolar: 18.16, euro: 20.7 });
  }, [])
  


  return (
    <>
    {console.log('xxx divisas-->: ', divisas)}
      <main>
        <div>
          <h4>{divisas.date}</h4>
          <h4>{divisas.dolar}</h4>
          <h4>{divisas.euro}</h4>
        </div>
      </main>
    </>
  )
}

export default Home