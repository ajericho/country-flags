import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import FlagCard from '../components/FlagCard.component'
import axios from 'axios'

export const getStaticProps = async () => {

  const rest = await fetch("https://restcountries.com/v3.1/all");
  const data = await rest.json();

  return {
    props: { countries: data}
  }
}


export default function Home({ countries }) {


  return (
    <div className="app-container">
      <Head>
        <title>Where in the world</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header className="navbar">
          <div class="layout-container">
            <h1>Where in the World</h1>
            <p>Dark Mode</p>
          </div>
        </header>

        <main>
          <div class="layout-container">
            state of results =

            filter bar
            --search
            -- filter

            <ul className="country-results-container">
              {countries.map(country => (
                <FlagCard country={country} />
              ))
              }
            </ul>
          </div>
        </main>
        <footer>
          Flags Footer
        </footer>
      </body>
    </div>
  )
}
