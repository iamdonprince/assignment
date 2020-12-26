import Head from "next/head";
import Layout from "../components/Layout";
import { getDataFromApi } from "../lib/data";

export default function Home({ data }) {
  return (
    <Layout home data={data}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
      </Head>
    </Layout>
  );
}
export async function getServerSideProps() {
  const allData = await getDataFromApi();

  return {
    props: {
      data: allData,
    },
  };
}
