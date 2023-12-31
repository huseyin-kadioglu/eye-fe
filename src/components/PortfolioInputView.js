import TransactionService from "../service/TransactionService";
import {useState} from "react";
import BaseInputView from "../common/BaseInputView";

const PortfolioInputView = ({setRefresh}) => {

    const [code, setCode] = useState(null);
    const [share, setShare] = useState(null);
    const [cost, setCost] = useState(null);
    const [side, setSide] = useState("BUY");

    const addButtonRenderingCondition = code == null || share == null || cost == null;

    const onClickHandler = () => {

        let params = {};
        params.code = code;
        params.share = share;
        params.cost = cost;
        params.side = side;

        TransactionService.createTransaction(params)
            .then(() => setRefresh(true))
            .catch(e => console.log(e));

        clearInputs();
    };

    const clearInputs = () => {
        setCode(null);
        setShare(null);
        setSide(null);
        setCost(null);

        document.getElementById("code").value = null;
        document.getElementById("share").value = null;
        document.getElementById("cost").value = null;
    }

    const toNumber = (str) => parseInt(str);

    return (
        <BaseInputView>
            <div>
                <label>
                    Hisse Kodu: <input id="code" name="code" onChange={e => setCode(e.target.value)}/>
                </label>
                <label>
                    Adet: <input id="share" name="share" onChange={e => setShare(toNumber(e.target.value))}/>
                </label>
                <label>
                    <select name="İşlem Yönü" onChange={e => setSide(e.target.value)}>
                        <option value="BUY">Alış</option>
                        <option value="SELL">Satış</option>
                    </select>
                </label>
                <label>
                    Maliyet: <input id="cost" name="cost" onChange={e => setCost(toNumber(e.target.value))}/>
                </label>
            </div>
            <div>
                <button onClick={clearInputs}>TEMİZLE</button>
                <button disabled={addButtonRenderingCondition} onClick={onClickHandler}>EKLE</button>
            </div>
            <hr/>
        </BaseInputView>
    );
};
export default PortfolioInputView;