import { GetStaticProps } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import slugify from 'slugify';

// Data
import graveyard from '../graveyard.json';

// Components
import Header from '../components/Header';
import App from '../components/App';
import Footer from '../components/Footer';
import { ProductWithSlug } from '../types/Product';

const HomePage: React.FC<{ items: ProductWithSlug[] }> = ({ items }) => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
                <meta name="description" content="Death by AI is like Killed by Google but two words have been changed. A RIP-off!" />
                <link rel="shortcut icon" href="favicon.png" />
                <title>Death by AI</title>
                <meta name="theme-color" content="#FAFAFA" />
                <link rel="canonical" href="https://deathbyai.com" />
                <meta itemProp="name" content="Death by AI" />
                <meta itemProp="description" content="Death by AI is like Killed by Google but two words have been changed. A RIP-off!" />
                <meta name="og:title" property="og:title" content="Death by AI" />
                <meta name="og:url" property="og:url" content="https://deathbyai.com" />
                <meta name="og:description" property="og:description" content="Death by AI is like Killed by Google but two words have been changed. A RIP-off!" />
                <meta name="og:site_name" property="og:site_name" content="Death by AI" />
                <meta name="og:type" property="og:type" content="website" />
            </Head>
            <Header />
            <App items={items} />
            <Footer />
        </>
    );
}
export default HomePage;

export const getStaticProps: GetStaticProps = async (_context) => {

    slugify.extend({
        '+': '-plus',
        '@': '-at',
    });

    const processed = graveyard.map((item) => ({
        ...item,
        slug: slugify(item.name, {
            lower: true,
        })
    }))

    return {
        props: {
            items: processed
        }
    }
}
