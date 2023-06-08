export class TemperatureEntity {
    #I_temperature = 0;
    #I_timestamp = 0;

    constructor(I_temperature, S_timestamp) {
        this.#I_temperature = I_temperature;
        this.#I_timestamp = S_timestamp;
    }

    get temperature() {
        return this.#I_temperature;
    }

    get formattedTime() {
        const O_date = new Date(this.#I_timestamp * 1000);
        return O_date.toLocaleDateString() + " " + O_date.toLocaleTimeString();
    }
}