import axios from "axios";

async function searchImages(term) {
    const url = "https://api.unsplash.com/search/photos";
    const response = await axios.get(url, {
        params: {
            query: term,
            client_id: "uhQlQHNk0GXiwuTJ0wwpj59EmZ0m7UWgiFo6YdnDARU"
        }
    });

    console.log(response.data);
    return response.data.results;
}

export default searchImages;
