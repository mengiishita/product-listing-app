import defaultAxios from 'axios';

// Setting the baseurl to the fake JSON-Server deployed on Heroku
const axios = defaultAxios.create({
    baseURL: "https://product-listing-app-92.herokuapp.com/",
    headers: { "Content-Type": "application/json" },
});

// Get all products using axios
export const getAllProducts = async (query: string = "") => {
    try {
        const todos = await axios.get(`items${query}`);

        return todos.data;
    } catch (err) {
        return console.error(err);
    }
}

// Get all filters using axios.
export const getAllFilters = async () => {
    try {
        const todos = await axios.get("/filters");

        return todos.data.results;
    } catch (err) {
        return console.error(err);
    }
}