/**
 * TabsManager class
 */
export class TabsManager {
    #O_NAV_DATA = document.getElementById("nav-data");
    #O_NAV_HISTORY = document.getElementById("nav-history");
    #O_TEMPERATURE_SECTION = document.getElementById("temperature-section");
    #O_TEMPERATURE_HISTORY_SECTION = document.getElementById("temperature-history-section");

    /**
     * Constructor
     */
    constructor() {
        this.#O_NAV_DATA.addEventListener('click', this.#selectData);
        this.#O_NAV_HISTORY.addEventListener('click', this.#selectHistory);
    }

    /**
     * Select the data tab
     * @private
     */
    #selectData = () => {
        this.#O_NAV_DATA.className = "selected";
        this.#O_NAV_HISTORY.className = "";
        this.#O_TEMPERATURE_SECTION.setAttribute('hidden', false);
        this.#O_TEMPERATURE_SECTION.setAttribute('aria-selected', true);
        this.#O_TEMPERATURE_HISTORY_SECTION.setAttribute('hidden', true);
        this.#O_TEMPERATURE_HISTORY_SECTION.setAttribute('aria-selected', false);
    }

    /**
     * Select the history tab
     * @private
     */
    #selectHistory = () => {
        this.#O_NAV_DATA.className = "";
        this.#O_NAV_HISTORY.className = "selected";
        this.#O_TEMPERATURE_SECTION.setAttribute('hidden', true);
        this.#O_TEMPERATURE_SECTION.setAttribute('aria-selected', false);
        this.#O_TEMPERATURE_HISTORY_SECTION.setAttribute('hidden', false);
        this.#O_TEMPERATURE_HISTORY_SECTION.setAttribute('aria-selected', true);
    }
}