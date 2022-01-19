import Image from "next/image";
import Link from "next/link";

export default function CountryDetails({ country }) {
    console.log(country)

    const currencyKey = Object.entries(country.currencies).map(([key, value]) => {
        return value;
    })
    const languageKey = Object.entries(country.languages).map(([key, value]) => {
        return <span className="list"> {value}</span>;
    })


    return (

        <div>
            <div className="country-image-big">
                <Image
                    src={country.flags.png}
                    width='600'
                    height='500'
                    layout="fixed"
                    objectFit="contain" />
            </div>
            <div className="country-details-container">
                <h1>{country.name.common}</h1>
                <div className="country-details">
                    <div>
                        <p>
                            <span className="label">
                                Native Name:
                            </span>
                            {country.name.official}
                        </p>
                        <p>
                            <span className="label">
                                Population:
                            </span>
                            {country.population}
                        </p>
                        <p>
                            <span className="label">
                                Region:
                            </span>
                            {country.region}
                        </p>
                        <p>
                            <span className="label">
                                Sub Region:
                            </span>
                            {country.subregion}
                        </p>
                        <p>
                            <span className="label">
                                Capital:
                            </span>
                            {country.capital}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="label">
                                Top Level Domain:
                            </span>
                            {country.tld[0]}
                        </p>
                        <p>
                            <span className="label">
                                Currencies:
                            </span>
                            {currencyKey[0].name}


                        </p>
                        <p>
                            <span className="label">
                                Languages:
                            </span>
                            {languageKey}

                        </p>

                    </div>
                </div>
                <div className="borering-countries">
                <p>
                            <span className="label">
                                Bordering Countries:
                            </span>
                                { !country.borders ? '' : country.borders.map(bc=> <Link href={`/country/${bc}`}>{bc}</Link>)}

                        </p>         
                </div>
            </div>

        </div>
    )
}