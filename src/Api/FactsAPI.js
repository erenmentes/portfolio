import axios from "axios";

const fetchFactsApi = async () => {
    try {
        const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
        return response;
    } catch ( error ) {
        console.error("something went wrong while fetching facts api.",error);
        return null;
    }
}

export default fetchFactsApi;