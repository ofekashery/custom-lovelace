# Israeli Broadcast Schedule Card

Israeli Broadcast Schedule Card allows you to show the current and upcoming shows of Israeli TV channels.

**Please ⭐ this repo if you find it useful**

<img src="https://github.com/ofekashery/custom-lovelace/assets/16443111/7e6aed96-baad-4581-a033-de1ca5f72283" width="500">

## Options

| Name       | Type   | Default      | Description                       |
| ---------- | ------ | ------------ | --------------------------------- |
| type       | string | **Required** | `israeli-broadcast-schedule-card` |
| channel    | string | **Required** | Channel id from the list below    |
| title      | string | Optional     | Card title                        |
| start_time | string | Current time | Start time of the schedule        |
| max        | int    | Optional     | Number of shows to show           |

## Installation

1. Install the `israeli-broadcast-schedule-card` card by copying `israeli-broadcast-schedule-card` to `<config directory>/www/israeli-broadcast-schedule-card`

2. Link `israeli-broadcast-schedule-card` inside you `ui-lovelace.yaml`

```yaml
resources:
  - url: /local/israeli-broadcast-schedule-card.js?v=1.0.0
    type: js
```

3. Add a channel in your `ui-lovelace.yaml`

## Example

```yaml
- type: custom:israeli-broadcast-schedule-card
  title: לוח שידורים כאן 11
  channel: CH30

- type: custom:israeli-broadcast-schedule-card
  title: פריים טיים בקשת 12
  channel: CH34
  start_time: '21:00'
  max: 3
```

## Channels

| Channel Id | Channel Name            |
| ---------- | ----------------------- |
| YSA1       | yes Movies Drama        |
| YSA2       | yes Movies Action       |
| YSA3       | yes Movies Comedy       |
| YSAU       | yes Israeli Cinema      |
| YESU       | yes TV Drama            |
| YESV       | yes TV Action           |
| YESP       | yes TV Comedy           |
| YSAT       | yes Docu                |
| TV50       | Israel Plus             |
| CH70       | Turkish Drama           |
| CH30       | Kan                     |
| CH34       | Keshet                  |
| CH36       | Reshet                  |
| PT92       | Channel 14              |
| CH65       | Humor Channel           |
| CH80       | Turkish Drama 2         |
| CH77       | Turkish Drama 3         |
| CH72       | Reality Channel         |
| PT38       | Big Brother             |
| TV21       | Shopping Channel        |
| CH75       | Viva Vintage            |
| CH81       | TV Game Shows           |
| TV67       | Music 24                |
| PT72       | Mediterranean Channel   |
| PT28       | Travel Channel          |
| PT20       | Food Channel            |
| PT14       | Health Channel          |
| CN06       | Walla +                 |
| PT63       | Hala TV                 |
| TV09       | LifeStyle               |
| PT41       | Home and Family         |
| CH32       | Makan                   |
| TV20       | Viva                    |
| PT60       | Viva Plus               |
| TV10       | E!                      |
| CH61       | Design Channel (DIY)    |
| TV18       | Discovery               |
| PT25       | National G.             |
| TV62       | Discovery Science       |
| PT35       | National G. Wild        |
| TV19       | History SD              |
| PT55       | History HD              |
| TV61       | Animal Planet           |
| PT13       | Daystar                 |
| CH58       | ONE2                    |
| PT54       | ONE                     |
| PT53       | Sport 1                 |
| PT23       | Sport 2                 |
| CH09       | Sport 3                 |
| CH11       | Sport 4                 |
| PT26       | Sport 5                 |
| TV16       | Sport 5+                |
| MU03       | Sport 5 Gold            |
| PT62       | Sport 5 Live            |
| CH56       | Sport 5 Stars           |
| CH55       | Sport 5 4K              |
| PT39       | Eurosport               |
| CH33       | Eurosport 2             |
| PT22       | Sport 1 SD              |
| TV87       | CBS Reality             |
| PT12       | EGO                     |
| CH85       | MUTV                    |
| TV34       | FTV                     |
| CH62       | Style Channel           |
| PT31       | Club MTV                |
| TV37       | MTV 00s                 |
| TV51       | MTV 80s                 |
| TV35       | MTV                     |
| PT50       | MTV Live                |
| CH26       | TLC                     |
| CH41       | Classica                |
| CH57       | Kan Educational         |
| TA02       | Baby                    |
| TV24       | Hop!                    |
| PT46       | Hop! Childhood          |
| PT59       | Disney Junior           |
| PT69       | NICK Junior             |
| CH19       | Kids Stars Channel      |
| YSA4       | yes Movies Kids         |
| CH98       | ZOOM TOON               |
| PT43       | Disney                  |
| PT85       | Zoom                    |
| NK01       | Nickelodeon             |
| CH13       | WiZ                     |
| TA05       | Junior                  |
| CH18       | Teennick                |
| PT48       | JimJam                  |
| PT30       | Hidabroot               |
| TV43       | Kehilaty (98)           |
| TV89       | Knesset                 |
| TV12       | CNN                     |
| TV42       | Sky News                |
| PT18       | France 24               |
| TV13       | Fox News                |
| TV59       | Bloomberg               |
| CN05       | France 24 (FR)          |
| PT17       | Al Jazeera (ENG)        |
| TV02       | METV                    |
| PT86       | Trace                   |
| PT06       | CGTN                    |
| CH50       | CGTN Documentary        |
| CH68       | BollyShow               |
| TV44       | RTL                     |
| TV46       | SAT 3                   |
| TV45       | SAT 1                   |
| TV79       | GTV                     |
| TV49       | TVE                     |
| PT11       | TVR International       |
| TV57       | PROTV International     |
| TV98       | ZEE TV                  |
| PT64       | Mediaset                |
| CH74       | France 3                |
| TV94       | France 2                |
| TV47       | ARTE                    |
| TV56       | Eurostar                |
| TV77       | RTM                     |
| PT19       | IETV                    |
| CH87       | ROTANA Cinema           |
| TV71       | LBC                     |
| TV73       | ROTANA                  |
| TV76       | Al Jazeera              |
| TV81       | Channel 1 (RUS)         |
| TV82       | RTR Planeta             |
| CN03       | Dom Kino Premium        |
| TV85       | NASHE KINO              |
| CH24       | REN TV                  |
| PT73       | Vremya                  |
| PT74       | Telecafe                |
| CH23       | Current Time            |
| PT51       | CTC                     |
| TV60       | NTV MIR                 |
| PT45       | TVCI                    |
| PT15       | 1+1                     |
| PT36       | Dom Kino                |
| CH27       | Investigation Discovery |
| CH29       | SHANSON TV              |
| TV65       | Russian MusicBox        |
| PT61       | Carousel                |
| PT78       | Disney Junior (RUS)     |
| CH14       | Baby (RUS)              |
| PT05       | Blue Hustler            |

## Credits

- [ofekashery](https://github.com/ofekashery)
