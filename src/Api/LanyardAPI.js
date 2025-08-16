import axios from "axios";

const fetchLanyardApi = async () => {
    try {
        const response = await axios.get("https://api.lanyard.rest/v1/users/1403750201700909267");
        return response.data;
    } catch(error) {
        console.error("failed to fetch lanyard api.",error);
        return null;
    }
}

export default fetchLanyardApi;