import axios from "axios";

async function searchImages(term) {
    const url = "https://api.unsplash.com/search/photos/?client_id=of_eNhrJA6-IiNU6QIec90KSYvd9pJnyf9IT9QXcXOs";
    const response = await axios.get(url, {
        params: {
            query: term
        }
    });

    console.log(response);
    return response.data.results;
}

export default searchImages