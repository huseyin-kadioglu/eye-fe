import axios from "axios";

class PortfolioService {

    static getPortfolios = () => {
        return axios.get("http://localhost:8080/portfolios");
    }
}

export default PortfolioService;