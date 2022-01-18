import Image from "next/image";
import Link from "next/link";



export default function FlagCard({ country }) {

    return (


        <Link href={`/country/${country.cca2}`} >

            <a>
                <li key={country.name.common} className="country-card">
                    <img
                        src={country.flags.png}
                        alt={`${country.name.common} Flag `}
                    />

                    <div className="country-content">
                        <h3> {country.name.common} </h3>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>

                </li>
            </a>
        </Link>
    )
}

