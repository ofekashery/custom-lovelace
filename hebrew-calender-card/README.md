# Hebrew Calender Card
#### Please ⭐ this repo if you find it useful
##### Forked from [rdehuyss/homeassistant-lovelace-google-calendar-card](https://github.com/rdehuyss/homeassistant-lovelace-google-calendar-card)

<img src="https://user-images.githubusercontent.com/16443111/44956131-b567be00-aec7-11e8-9869-107ed74eb65e.png" width="500">



## Usage
### Prerequisites
You should have setup Google calendar integration or Caldav integration in HomeAssistant.

### Configuration
In your ui-lovelace.yaml

```
resources:
  - url: https://unpkg.com/moment@2.22.2/moment.js
    type: js
  - url: /local/hebrew-calendar-card.js?v=1.0.0
    type: module
...

- type: "custom:hebrew-calendar-card"
  entities:
    - calendar.ronald_dehuysser
    - calendar.contacts

- type: "custom:hebrew-calendar-card"
  name: "Birthdays"
  showProgressBar: false
  entities:
    - calendar.contacts
```

### You want more than 5 Google events?
Using docker-compose and sed change the `'maxResults': 5` in `/homeassistant/components/calendar/google.py` to a number of your liking.

## Credits
- [ofekashery](https://github.com/ofekashery)
- [rdehuyss](https://github.com/rdehuyss)
