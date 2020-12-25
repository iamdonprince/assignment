export async function getDataFromApi() {
  try {
    const res = await fetch(
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    );

    return res.json();
  } catch (e) {
    console.log("error :", e);
    return e;
  }
}
