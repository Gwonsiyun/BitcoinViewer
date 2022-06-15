function Coloring({text}){
    let priceUSD = text;
    let priceWON = (Math.round(priceUSD*1292.49*1000)/1000).toString();
    console.log(priceWON);
    let a = priceWON.substring(0, priceWON.indexOf("."));
    let b = priceWON.substring(priceWON.indexOf("."));

    return `${a}'<span>'${b}'</span>'`;
    // return "";
}
// {(Math.round((coin.quotes.USD.price)*1292.49*1000)/1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}

export default Coloring