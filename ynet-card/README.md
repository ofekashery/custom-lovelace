# Ynet Card
Ynet Card allows you to show news flash from [ynet](https://ynet.co.il).
#### Please ⭐ this repo if you find it useful

<img src="https://user-images.githubusercontent.com/16443111/44750566-6b28ba80-ab1e-11e8-9452-aa7a4819a2b1.png" width="400">

## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:ynet-card`
| title | string | Optional | Card title
| language | string | Optional | News language (English or Hebrew)
| max | int | Optional | Max items

## Installation

1. Install the card by copying `ynet-card.js` to `<config directory>/www/`

2. Link `ynet-card` inside you `ui-lovelace.yaml` 
    ```yaml
    resources:
      - url: /local/ynet-card.js?v=0.0.1
        type: js
    ```

3. Add the card to your `ui-lovelace.yaml`

## Example

```yaml
- type: custom:ynet-card
  title: מבזקי חדשות
  language: hebrew
  max: 3
```

## Credits
- [ofekashery](https://github.com/ofekashery)
