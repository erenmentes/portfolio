import axios from "axios";

const fetchGithubApi = async () => {
    try {
        const response = await axios.get("https://api.github.com/users/erenmentes");
        return response;
    } catch ( error ) {
        console.error("something went wrong while fetching github stats.", error);
        return null;
    }
}

export default fetchGithubApi;