const I_TIMEOUT = 2000;

// Array of random temperature
const A_TAB = [];
for (let I_i = 0; I_i < 20; I_i++) {
    A_TAB.push(Math.floor(Math.random() * 50) - 10);
}

// Temperature constants
const S_TEMPERATURE_UNIT = "°C";
const O_COLD_TEMPERATURE = {min: -10, max: 0};
const O_COOL_TEMPERATURE = {min: 0, max: 20};
const O_WARM_TEMPERATURE = {min: 20, max: 30};
const O_HOT_TEMPERATURE = {min: 30, max: 50};

// Advice text
const S_HOT_TEXT = "Caliente ! Vamos a la playa, ho hoho hoho !!";
const O_ADVICE_HOT_ELEMENT = document.createElement("p");
O_ADVICE_HOT_ELEMENT.appendChild(document.createTextNode(S_HOT_TEXT));

const S_COLD_TEXT = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
const O_ADVICE_COLD_ELEMENT = document.createElement("p");
O_ADVICE_COLD_ELEMENT.appendChild(document.createTextNode(S_COLD_TEXT));

// Temperature section
const O_TEMPERATURE_SECTION = document.getElementById("temperature-section");
const O_TEMPERATURE_VALUE = document.getElementById("temperature-value");

// Historic section
const O_HISTORIC_SECTION = document.getElementById("temperature-historic");

/**
 * Add advice to the temperature section
 * @param O_paragraph
 */
const addAdvice = (O_paragraph) => {
    O_TEMPERATURE_SECTION.insertBefore(O_paragraph, O_TEMPERATURE_VALUE);
}

const addHistoricValue = (I_value) => {
    const O_historicElement = document.createElement("p");
    const S_historicText = document.createTextNode(`La température était de ${I_value}${S_TEMPERATURE_UNIT}`);
    O_historicElement.appendChild(S_historicText);
    O_HISTORIC_SECTION.insertBefore(O_historicElement, O_HISTORIC_SECTION.firstChild);
}

/**
 * Remove advice from the temperature section
 */
const removeAdvice = () => {
    if (O_TEMPERATURE_SECTION.contains(O_ADVICE_HOT_ELEMENT)) {
        O_TEMPERATURE_SECTION.removeChild(O_ADVICE_HOT_ELEMENT);
    }
    else if (O_TEMPERATURE_SECTION.contains(O_ADVICE_COLD_ELEMENT)) {
        O_TEMPERATURE_SECTION.removeChild(O_ADVICE_COLD_ELEMENT);
    }
}

A_TAB.forEach((I_element, I_index) => {
    setTimeout(() => {
        removeAdvice();
        O_TEMPERATURE_VALUE.innerHTML = `${I_element}${S_TEMPERATURE_UNIT}`;
        if (I_element >= O_COLD_TEMPERATURE.min && I_element < O_COLD_TEMPERATURE.max) {
            addAdvice(O_ADVICE_COLD_ELEMENT);
            O_TEMPERATURE_VALUE.className = "cold-temperature";
        } else if (I_element >= O_COOL_TEMPERATURE.min && I_element < O_COOL_TEMPERATURE.max) {
            O_TEMPERATURE_VALUE.className = "cool-temperature";
        } else if (I_element >= O_WARM_TEMPERATURE.min && I_element < O_WARM_TEMPERATURE.max) {
            O_TEMPERATURE_VALUE.className = "warm-temperature";
        } else if (I_element >= O_HOT_TEMPERATURE.min && I_element < O_HOT_TEMPERATURE.max) {
            addAdvice(O_ADVICE_HOT_ELEMENT);
            O_TEMPERATURE_VALUE.className = "hot-temperature";
        }
        addHistoricValue(I_element);
    }, I_TIMEOUT * I_index);
});