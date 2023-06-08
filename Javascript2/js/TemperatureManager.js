import {TemperatureEntity} from "./TemperatureEntity.js";

export class TemperatureManager {
    static getTemperature() {
        return fetch('https://hothothot.dog/api/capteurs/exterieur',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                    if (res.ok) {
                        return res.json().then(data => {
                            return new TemperatureEntity(data?.capteurs?.[0]?.Valeur, data?.capteurs?.[0]?.Timestamp);
                        });
                    }
                }
            )
    }
}