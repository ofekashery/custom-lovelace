# School Vacation Card
School Vacation Card displays nicely the sensor [School-Vacation](https://github.com/rt400/School-Vacation) by [rt400](https://github.com/rt400).
#### Please ⭐ this repo if you find it useful

<img src="https://user-images.githubusercontent.com/16443111/47725189-c8e19c00-dc60-11e8-9a5e-328176cd0bfe.png" width="400">


## Installation

1. Install the card by copying `school-vacation-card.js` to `<config directory>/www/`

2. Link `school-vacation` inside your `ui-lovelace.yaml` 
    ```yaml
    resources:
      - url: /local/school-vacation-card.js?v=0.0.1
        type: js
    ```

3. Add the card to your `ui-lovelace.yaml` by
    ```yaml
    - type: custom:school-vacation-card
    ```

## Credits
- [ofekashery](https://github.com/ofekashery)