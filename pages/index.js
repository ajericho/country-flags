import React, { useEffect, useState, useRef } from 'react'
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
  const [countryList, setCountryList] = useState([]);
  const inputVal = useRef();
  const selectVal = useRef();

  const filterOptions = [
    { id: 1, label: 'All', value: '' },
    { id: 2, label: 'Americas', value: 'Americas' },
    { id: 3, label: 'Europe', value: 'Europe' },
    { id: 4, label: 'Asia', value: 'Asia' },
    { id: 5, label: 'Oceania', value: 'Oceania' },
    { id: 5, label: 'Antarctic', value: 'Antarctic' },
  ]

  useEffect(() => {
    setCountryList(countries)

  }, [])

  function handleChange(data) {

    const newList = countries.filter(country => country.region.includes(data)).map(item => (
      item
    ))
    setCountryList(newList)
  };

  function handleSearch(data) {

    const newList = countries.filter(country => country.name.common.toLowerCase().includes(data.toLowerCase())).map(item => (
      item
    ))
    setCountryList(newList)
  };


  return (
    <Layout>
      <div>
        <input name="search" id="search" placeholder="Search Countries" onChange={(e) => handleSearch(e.target.value)} />

        <label htmlFor="region" >
          Filter By Region
        </label>
        <select
          id="region"
          name="region"
          defaultValue="All"
          onChange={(e) => handleChange(e.target.value)}

        >
          {filterOptions.map(option => (
            <option key={option.id} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <ul className="country-results-container">
        {countryList.map(country => (
          <FlagCard country={country} />
        ))
        }
      </ul>
    </Layout>

  )
}
