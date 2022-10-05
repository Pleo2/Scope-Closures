
/* function moneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`Money is: ${saveCoins}`);
}

moneyBox(5);
moneyBox(5); */

function myMoneyBox() {
  let saveCoins = 0;
  function saveMoney(coins) {
    saveCoins += coins;
    console.log(`Money is: ${saveCoins}`);
  }
  return saveMoney;
}

const myMoneyBoxO = myMoneyBox();  // asi se acede de manera independiente a una misma function para calcular y almacenar en su respectiva variable y mediante una variable podemas acceder al codigo dentro de una function

myMoneyBoxO(5);
myMoneyBoxO(5);
myMoneyBoxO(10);

const moneyPiolina = myMoneyBox();

moneyPiolina(10);
moneyPiolina(30);
moneyPiolina(50);
