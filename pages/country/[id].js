import Link from 'next/link';
import { useRouter } from 'next/router'
import CountryDetails from '../../components/CountryDetails.component';
import Layout from '../../components/Layout.component';

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
        props: { country: data[0] }
    }
}


export default function Country({ country }) {

    return (
        <Layout>
            <div className="">
                <Link href="/">
                    <button>Back</button>
                </Link>
            </div>
            <CountryDetails country={country} />
        </Layout>
    )
}


