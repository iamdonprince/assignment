import Link from "next/link";
import React, { useEffect, useState } from "react";
import DetailPage from "../../components/DetailPage";
import Layout from "../../components/Layout";
import { getDataFromApi } from "../../lib/data";
function detailsPage({ id, data }) {
  const [user, setUser] = useState();

  useEffect(() => {
    if (data) {
      data.map((post) => {
        if (post.id === parseInt(id)) {
          setUser(post);
        }
      });
    }
  }, [data]);

  return (
    <Layout>
      <div className="d-flex  mb-4 ">
        <Link href="/">
          <button type="button" className="btn btn-info py-2">
            Back
          </button>
        </Link>
        <h1 className="ml-4">Details Page</h1>
      </div>
      <DetailPage user={user} />
    </Layout>
  );
}

export default detailsPage;

// export async function getStaticPaths() {
//     const allData = await getDataFromApi();
//     const paths = [];
//     allData.forEach((d) => {
//       paths.push({
//         params: { id: `${d.id}` },
//       });
//     });

//     return {
//       paths,
//       fallback: false,
//     };
//   }

//   export async function getStaticProps({ params }) {
//     const allData = await getDataFromApi();
//     return {
//       props: { params: params.id, data: allData },
//     };
//   }
export async function getServerSideProps({ query }) {
  const allData = await getDataFromApi();

  return {
    props: {
      id: query.id,
      data: allData,
    },
  };
}
