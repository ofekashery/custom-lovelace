class SchoolVacationCard extends HTMLElement {

    set hass(hass) {
        let school_summary = hass.states['sensor.school_summary'].state;
        // school_summary = "יום לימודים"; // Debug

        let html = "<style>ha-card{margin-bottom:15px;padding:4px 12px;direction:rtl;";
        if (school_summary !== "יום לימודים") {
            html += "background-color: #ffdddd;border-right: 6px solid #f44336}</style>";
            html += `<ha-card><p><strong>אין לימודים:</strong> ${school_summary}</p></ha-card>`;
        } else {
            html += "background-color: #e7f3fe;border-right: 6px solid #2196F3}</style>";
            html += "<ha-card><p><strong>יום לימודים</strong></p></ha-card>";
        }
        this.innerHTML = html;
    }

    setConfig(config) {

    }

    getCardSize() {
        return 1;
    }
}

customElements.define('school-vacation-card', SchoolVacationCard);