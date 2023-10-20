import * as React from 'react';
import {useEffect, useState} from 'react';
import TransactionView from "./components/TransactionView";
import DefaultContainer from "./components/DefaultContainer";
import PortfolioInputView from "./components/PortfolioInputView";
import TransactionService from "./service/TransactionService";
import PortfolioService from "./service/PortfolioService";
import PortfolioView from "./components/PortfolioView";


function App() {

    const [transactions, setTransactions] = useState([]);
    const [portfolios, setPortfolios] = useState([]);
    const [refreshPage, setRefresh] = useState(false);

    useEffect(() => {
        TransactionService.getTransactions().then(response => setTransactions(response.data));
        PortfolioService.getPortfolios().then(response => setPortfolios(response.data));
        setRefresh(false);
    }, [refreshPage]);

    return (
        <DefaultContainer>
            <p style={{textAlign: "center"}}>EYE, the portfolio tracker!</p>
            <PortfolioInputView setRefresh={setRefresh}/>
            <TransactionView transactions={transactions}/>
            <PortfolioView portfolios={portfolios}/>
        </DefaultContainer>
    );
}

export default App;
