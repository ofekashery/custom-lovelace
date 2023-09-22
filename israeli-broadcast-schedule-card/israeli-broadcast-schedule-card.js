class IsraeliBroadcastScheduleCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      this.card = document.createElement('ha-card');
      this.card.dir = 'rtl';

      const style = document.createElement('style');
      style.textContent = `
          .schedule-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0;
          }
          .schedule-item:first-child {
            font-weight: bold;
          }
          .schedule-item__time {
            color: var(--secondary-text-color);
          }
        `;

      // Keep default ha-card content style
      this.card.innerHTML = `<div class="card-content"></div>`;
      this.content = this.card.querySelector('.card-content');

      this.content.innerHTML = 'בטעינה...';

      this.card.appendChild(style);
      this.card.appendChild(this.content);
      this.appendChild(this.card);
    }

    this.card.header = this.config.title;
    this.fetchSchedule().then(this.renderSchedule.bind(this));
  }

  renderSchedule() {
    // Clear previous schedule
    while (this.content.firstChild) {
      this.content.removeChild(this.content.firstChild);
    }

    // Render new schedule
    for (const item of this.schedule.slice(0, this.config.max)) {
      const container = document.createElement('div');
      container.className = 'schedule-item';

      const time = document.createElement('span');
      time.className = 'schedule-item__time';
      time.innerText = item.time;
      container.appendChild(time);

      const title = document.createElement('span');
      title.className = 'schedule-item__title';
      title.innerText = item.title;
      container.appendChild(title);

      this.content.appendChild(container);
    }
  }

  async fetchSchedule() {
    return fetch(
      `https://israeli-broadcast-schedule.vercel.app/api/${
        this.config.channel
      }?time=${this.config.start_time || ''}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.schedule = data.schedule;
      })
      .catch((error) => {
        console.error('Error while fetching schedule', error);
      });
  }

  setConfig(config) {
    if (!config.channel) {
      throw new Error('Please define a channel');
    }
    if (config.start_time && !config.start_time.includes(':')) {
      throw new Error('Please define a valid start_time, e.g. 20:00');
    }
    this.config = config;
  }

  getCardSize() {
    return 1;
  }
}
customElements.define(
  'israeli-broadcast-schedule-card',
  IsraeliBroadcastScheduleCard
);
