# Hebrew Greeting Card
#### Please ⭐ this repo if you find it useful

<img src="https://user-images.githubusercontent.com/16443111/44717065-b1513000-aac4-11e8-91c3-e1801483e4a3.png" width="500">



## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:hebrew-greeting-card`
| background | string | **Required** | URL link to card background
| height | int | Optional | Card height in px (Default: 200)
| weather | [weather](https://www.home-assistant.io/components/weather) | Optional | Weather platform
| _[userid]_ | string | Optional | User name

## Installation

1. Install the card by copying `hebrew-greeting-card.js` to `<config directory>/www/`

2. Link `hebrew-greeting-card` inside you `ui-lovelace.yaml` 
    ```yaml
    resources:
      - url: /local/hebrew-greeting-card.js?v=0.0.1
        type: js
    ```

3. Add a channel in your `ui-lovelace.yaml`

## Example

```yaml
- type: custom:hebrew-greeting-card
  background: https://www.w3schools.com/w3images/forestbridge.jpg
  height: 250
  weather: weather.yweather
  a1234567890abcde1234abcde56789ad: שם 1
  asdfghjk678900fghjkloerxcbnm1234: שם 2
  dsfgcvbnm678ltzxcvbn1234aqwert56: שם 3
```

## How to get the _userid_
Go Configuration > Users > select user > ID

## Credits
- [ofekashery](https://github.com/ofekashery)
