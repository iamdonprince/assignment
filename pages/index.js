import Head from "next/head";
import Layout from "../components/Layout";
import { getDataFromApi } from "../lib/data";

export default function Home({ data }) {
  return (
    <Layout home data={data}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
