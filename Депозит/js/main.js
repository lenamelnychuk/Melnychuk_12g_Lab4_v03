function calculateFinalAmount() {
    // Отримання значень з полів введення
    let depositAmount = parseFloat(document.getElementById("depositAmount").value.replace("$", ""));
    let years = parseInt(document.getElementById("years").value);
    let annualInterest = parseFloat(document.getElementById("annualInterest").value.replace("%", ""));

    // Перевірка введених даних
    if (isNaN(depositAmount) || isNaN(years) || isNaN(annualInterest) || years <= 0 || annualInterest <= 0) {
        document.getElementById("result").innerText = "Будь ласка, введіть дійсне значення.";
        return;
    }

    // Капіталізація відбувається щомісячно, тому перераховуємо відсоткову ставку на місячну
    let monthlyInterest = annualInterest / 12 / 100;
    //Спершу річний відсоток ділиться на 12, щоб перетворити його на місячний. / 100 - Цей крок перетворює відсотки на десятковий вигляд.

    // Розрахунок кінцевої суми депозиту
    let finalAmount = depositAmount * Math.pow(1 + monthlyInterest, years * 12); // pow - Returns the value of a base expression taken to a specified power (модуль)

    // Виведення результату на сторінку
    document.getElementById("result").innerText = "Після " + years + " років сума становитиме $" + finalAmount.toFixed(2);
}