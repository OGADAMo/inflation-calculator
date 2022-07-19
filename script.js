function inflationCalculator () {
    let inflationRate = document.querySelector("#inflationRate");
    inflationRate = parseFloat(inflationRate.value);

    let currentValue = document.querySelector("#money");
    currentValue = parseFloat(currentValue.value);

    let inflationTime = document.querySelector("#years");
    inflationTime = parseFloat(inflationTime.value);


    let inflationValue = currentValue + (currentValue * (inflationRate/100))
    for (let i = 1; i < inflationTime; i++) {
        inflationValue += inflationValue * (inflationRate/100)
        
    }

    let inflationDiv = document.createElement('div');
    inflationDiv.className = 'new-value';
    inflationDiv.innerText = 'Danasnjih '+currentValue+"eura vrijedi isto kao "+inflationValue+"eura";

    document.querySelector('.container').appendChild(inflationDiv);

    console.log(inflationRate);
    console.log(currentValue );
    console.log(inflationTime.value);
    console.log("---------------");
    console.log(inflationValue);

}

