import {TabsManager} from "./js/TabsManager.js";
import {TemperatureManager} from "./js/TemperatureManager.js";
import {CurrentTemperatureManager} from "./js/CurrentTemperatureManager.js";

const O_TAB_MANAGER = new TabsManager();
const O_CURRENT_TEMPERATURE_MANAGER = new CurrentTemperatureManager();

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

// HISTORY section
const O_HISTORY_SECTION = document.getElementById("temperature-history");

// Nav element
const O_NAV_DATA = document.getElementById("nav-data");
const O_NAV_HISTORY = document.getElementById("nav-history");

/**
 * Add advice to the temperature section
 * @param O_paragraph
 */
const addAdvice = (O_paragraph) => {
    O_paragraph.setAttribute('role', 'alert');
    O_TEMPERATURE_SECTION.insertBefore(O_paragraph, O_TEMPERATURE_VALUE);
}

const addHISTORYValue = (I_value) => {
    const O_historyElement = document.createElement("p");
    O_historyElement.setAttribute('role', 'alert');
    const S_historyText = document.createTextNode(`La température était de ${I_value}${S_TEMPERATURE_UNIT}`);
    O_historyElement.appendChild(S_historyText);
    O_HISTORY_SECTION.insertBefore(O_historyElement, O_HISTORY_SECTION.firstChild);
}