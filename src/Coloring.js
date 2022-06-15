function Coloring({text}){
    let priceUSD = text;
    let priceWON = (Math.round(priceUSD*1292.49*1000)/1000).toString();
    let a = priceWON.substring(0, priceWON.indexOf("."));
    let b = priceWON.substring(priceWON.indexOf("."));

    return (
        <span>{a}<span style={{color:"red",}}>{b}</span></span>
    );
}

export default Coloring