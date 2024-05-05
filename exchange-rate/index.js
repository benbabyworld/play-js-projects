const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');



const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");

const rateText = document.getElementById("rate");
const swap = document.getElementById("btn")



currency_one.addEventListener('change', calculateMoney);
currency_two.addEventListener('change', calculateMoney);
amountOne.addEventListener('input', calculateMoney)
amountOne.addEventListener('input', calculateMoney)



function calculateMoney() {
    const one = currency_one.value;
    const two = currency_two.value;
    console.log("สกุลเงินต้นทาง = " + one);
    console.log("สกุลเงินปลายทาง = " + two);
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res => res.json()).then(data => {
        console.log(data.rates[two]);
        const rate = data.rates[two]
        rateText.innerText = `1 ${one} = ${rate} ${two}`;
        amountTwo.value = amountOne.value*rate.toFixed(2)
    })
}

swap.addEventListener('click', ()=> {


   const temp = currency_one.value; // ต้นทาง
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculateMoney()
})

calculateMoney()