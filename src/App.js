import {useEffect, useState} from "react";


function App() {
    const [loading,setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [viewCoins,setViewCoins] = useState([]);
    const [coinSelect, setCoinSelect] = useState("");

    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((respons)=>respons.json())
            .then((json)=> {
                setCoins(json);
                setLoading(false);
            });
    },[])
    const select = (e) =>{
        setCoinSelect(e.target.value);
    }
    useEffect(()=>{
        setViewCoins([]);
        if(coinSelect===""){
            return;
        }
        for(let temp in coins){
            if(coins[temp].name.toUpperCase().includes(coinSelect.toUpperCase())){
                setViewCoins((v)=>[...v,coins[temp]]);
            }
        }
    },[coinSelect]);
    return (
        <div>
            <h1>The Coins {loading? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading....</strong> : null}
            <input type={'text'} list={'list'} id={'coinSelect'} onChange={select}/>
            <datalist id={'list'} >
                {coins.map((coin,index) => <option key={index} value={coin.name}>{coin.name}</option>)}
            </datalist>
            <div><span>select coin</span></div>
            <ul>
                {viewCoins.map((coin,index)=><li key={index}>{coin.name} ({coin.symbol}): {(Math.round((coin.quotes.USD.price)*1292.49*1000)/1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>)}
            </ul>
        </div>
    );
}

export default App;
