import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    const paths = data.map(country => {
        return {
            params: {
                id: country.cca2.toString()
            }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const code = context.params.id
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    const data = await res.json();

    return {
        props: { country: data }
    }
}


export default function Country({country}) {
    console.log(country)
    return (
        <h1>{country[0].name.common} </h1>
    )
}


