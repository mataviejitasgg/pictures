import axios from "axios";

async function searchImages(term) {
    const url = "https://api.unsplash.com/search/photos/?client_id=uhQlQHNk0GXiwuTJ0wwpj59EmZ0m7UWgiFo6YdnDARU";
    const response = await axios.get(url, {
        params: {
            query: term
        }
    });

    console.log(response);
    return response.daa.results;
}

export default searchImages