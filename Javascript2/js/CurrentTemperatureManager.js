import {TemperatureManager} from "./TemperatureManager.js";

export class CurrentTemperatureManager {
    #S_TEMPERATURE_UNIT = "°C";
    #O_COLD_TEMPERATURE = {min: -10, max: 0};
    #O_COOL_TEMPERATURE = {min: 0, max: 20};
    #O_WARM_TEMPERATURE = {min: 20, max: 30}
    #O_HOT_TEMPERATURE = {min: 30, max: 50};

    #S_HOT_TEXT = "Caliente ! Vamos a la playa, ho hoho hoho !!";
    #O_ADVICE_HOT_ELEMENT = null;
    #S_COLD_TEXT = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    #O_ADVICE_COLD_ELEMENT = null;

    #O_TEMPERATURE_SECTION = document.getElementById("temperature-section");
    #O_TEMPERATURE_VALUE = document.getElementById("temperature-value");

    #I_temperature = null;

    constructor() {
        this.#O_ADVICE_HOT_ELEMENT = document.createElement("p");
        this.#O_ADVICE_HOT_ELEMENT.appendChild(document.createTextNode(this.#S_HOT_TEXT));

        this.#O_ADVICE_COLD_ELEMENT = document.createElement("p");
        this.#O_ADVICE_COLD_ELEMENT.appendChild(document.createTextNode(this.#S_COLD_TEXT));

        setInterval(this.#refreshTemperature, 1000);
    }

    #addAdvice = (O_paragraph) => {
        O_paragraph.setAttribute('role', 'alert');
        this.#O_TEMPERATURE_SECTION.insertBefore(O_paragraph, this.#O_TEMPERATURE_VALUE);
    }

    #removeAdvice = () => {
        if (this.#O_TEMPERATURE_SECTION.contains(this.#O_ADVICE_HOT_ELEMENT)) {
            this.#O_TEMPERATURE_SECTION.removeChild(this.#O_ADVICE_HOT_ELEMENT);
        }
        else if (this.#O_TEMPERATURE_SECTION.contains(this.#O_ADVICE_COLD_ELEMENT)) {
            this.#O_TEMPERATURE_SECTION.removeChild(this.#O_ADVICE_COLD_ELEMENT);
        }
    }

    #refreshTemperature = async () => {
        let O_temp = await TemperatureManager.getTemperature();
        if (this.#I_temperature === O_temp.temperature) {
            return;
        }
        this.#I_temperature = O_temp.temperature;
        this.#O_TEMPERATURE_VALUE.innerHTML = `${this.#I_temperature}${this.#S_TEMPERATURE_UNIT}`;
        this.#removeAdvice();
        if (this.#I_temperature >= this.#O_COLD_TEMPERATURE.min && this.#I_temperature < this.#O_COLD_TEMPERATURE.max) {
            this.#addAdvice(this.#O_ADVICE_COLD_ELEMENT);
            this.#O_TEMPERATURE_VALUE.className = "cold-temperature";
        } else if (this.#I_temperature >= this.#O_COOL_TEMPERATURE.min && this.#I_temperature < this.#O_COOL_TEMPERATURE.max) {
            this.#O_TEMPERATURE_VALUE.className = "cool-temperature";
        } else if (this.#I_temperature >= this.#O_WARM_TEMPERATURE.min && this.#I_temperature < this.#O_WARM_TEMPERATURE.max) {
            this.#O_TEMPERATURE_VALUE.className = "warm-temperature";
        } else if (this.#I_temperature >= this.#O_HOT_TEMPERATURE.min && this.#I_temperature < this.#O_HOT_TEMPERATURE.max) {
            this.#addAdvice(this.#O_ADVICE_HOT_ELEMENT);
            this.#O_TEMPERATURE_VALUE.className = "hot-temperature";
        }
    }
}