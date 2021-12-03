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

  return (
    <>
      <Head>
        <title>Catly</title>
        <meta name="keywords" content="Catly | Homepage" />
      </Head>

      <div className='base'>
        <Left mood={mood} handleMood={handleMood} />
        <Right moods={moodsArr} />
      </div>
    </>
  )
}
