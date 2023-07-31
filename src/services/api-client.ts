import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'48be5fb7960e44499902b540ff4ee5ac'
    }
})