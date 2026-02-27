let getMoney = () =>
{
    try {
        let textbox=document.getElementById("usdAmount");
        let s1=textbox.value;

        if(s1==="")
        {
            throw new Error("Value Empty")
        }
        let n1=Number(s1);
        if(!Number.isInteger(n1))
        {
            throw new Error("Invalid input")
        }
        if(n1 <= 0)
        {
            throw new Error("Positive only")
        }
        fetchMoney(n1);
    }
    catch(err)
    {
        alert(err);
        return;
    }
}

let fetchMoney = async (n1) =>
{
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then((response)=>response.json())
    .then((data)=>showMoney(data,n1))
    .catch((err) =>console.log(err));
}

let showMoney =(data,n1) =>{
    let {rates} = data;
    let amount = rates.INR * n1;
    let amountbox=document.getElementById("result");
    amountbox.innerText="Total Amount is Rs "+amount;
}