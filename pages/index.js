import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Left from '../components/layout/Left'
import Right from '../components/layout/Right'


export default function Home() {

    const [moodsArr, setMoodsArr] = useState([]);
    const [mood, setMood] = useState("");

    const handleMood = (value) =>{
        setMood(value);
    }

    const saveMood = (value) =>{
        setMoodsArr([
            value,
            ...moodsArr
        ])
        setMood("");
    }

  return (
    <>
      <Head>
        <title>Catly</title>
        <meta name="keywords" content="Catly | Homepage" />
      </Head>

      <section className='base'>
        <Left mood={mood} handleMood={handleMood} saveMood={saveMood} />
        <Right moods={moodsArr} />
      </section>
    </>
  )
}
