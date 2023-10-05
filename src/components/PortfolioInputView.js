import TransactionService from "../service/TransactionService";
import {useState} from "react";

const PortfolioInputView = ({setRefresh}) => {


    const [code, setCode] = useState(null);
    const [share, setShare] = useState(null);
    const [cost, setCost] = useState(null);
    const [side, setSide] = useState(null);

    const onClickHandler = () => {

        let params = {};
        params.code = code;
        params.share = share;
        params.cost = cost;
        params.side = side;


        TransactionService.createTransaction(params).then(setRefresh(true)).catch(e => console.log(e));
    };

    const clearInputs = () => {
        setCode(null);
        setShare(null);
        setSide(null);
        setCost(null);
    }

    const toNumber = (str) => parseInt(str);

    return (
        <div style={{display: "inline-block"}}>
            <label>
                Hisse Kodu: <input name="code" onChange={e => setCode(e.target.value)}/>
            </label>
            <label>
                Adet: <input name="share" onChange={e => setShare(toNumber(e.target.value))}/>
            </label>
            <label>
                ALIŞ: <input type="checkbox" name="side" onChange={e => setSide(e.target.value)} defaultChecked={true}/>
            </label>
            <label>
                Maliyet: <input name="cost" onChange={e => setCost(toNumber(e.target.value))}/>
            </label>
            <button onClick={clearInputs}>TEMİZLE</button>
            <button onClick={onClickHandler}>EKLE</button>
        </div>
    );
};
export default PortfolioInputView;