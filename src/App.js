import * as React from 'react';
import {useEffect, useState} from 'react';
import TransactionView from "./components/TransactionView";
import DefaultContainer from "./components/DefaultContainer";
import PortfolioInputView from "./components/PortfolioInputView";
import TransactionService from "./service/TransactionService";


function App() {

    const [transactions, setTransactions] = useState([]);
    const [refreshPage, setRefresh] = useState(false);

    useEffect(() => {
        TransactionService.getTransactions().then(response => setTransactions(response.data));
        setRefresh(false);
    }, [refreshPage]);

    return (
        <DefaultContainer>
            <p>EYE, the portfolio tracker!</p>

            <PortfolioInputView setRefresh={setRefresh}/>
            <TransactionView transactions={transactions}/>
        </DefaultContainer>
    );
}

export default App;
