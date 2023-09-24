import axios from "axios";
const countryApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

countryApi.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.message || "Something went wrong...");
  }
);

export const getCountriesList = async () => {
  try {
    const res = await countryApi.get("/all");
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to fetch data from the countries API");
  }
};
