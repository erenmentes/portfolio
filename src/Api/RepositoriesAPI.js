import axios from "axios";

const fetchApi = async () => {
    
    try {
        const response = await axios.get("https://api.github.com/users/erenmentes/repos");
        return response;
    } catch (error) {
        console.error("failed to get repositories",error);
        return null;
    }
    
}

export default fetchApi;