import * as React from 'react';
import TransactionView from "./components/TransactionView";
import DefaultContainer from "./components/DefaultContainer";
import PortfolioInputView from "./components/PortfolioInputView";


function App() {

    return (
        <DefaultContainer>
            <p>EYE, the portfolio tracker!</p>

            <PortfolioInputView/>
            <TransactionView/>
        </DefaultContainer>
    );
}

export default App;
