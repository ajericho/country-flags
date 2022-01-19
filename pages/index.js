import React from 'react'
import Layout from '../components/Layout.component'
import FlagCard from '../components/FlagCard.component'

export const getStaticProps = async () => {

  const rest = await fetch("https://restcountries.com/v3.1/all");
  const data = await rest.json();

  return {
    props: { countries: data }
  }
}


export default function Home({ countries }) {


  return (
    <Layout>

      <main>

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

      </main>
    </Layout>

  )
}
