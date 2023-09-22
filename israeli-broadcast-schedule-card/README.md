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
| CH90       | Mediterranean Plus      |
| CH72       | Reality Channel         |
| PT38       | Big Brother             |
| TV21       | Shopping Channel        |
| CH75       | Viva Vintage            |
| CH81       | TV Game Shows           |
| TV67       | Music 24                |
| PT72       | Mediterranean Channel   |
| YESI       | Yes POP UP              |
| PT28       | Travel Channel          |
| PT20       | Food Channel            |
| CN06       | Walla +                 |
| CN07       | The Pit (Pop Up)        |
| PT63       | HALA TV                 |
| TV09       | LifeStyle               |
| PT41       | Home and Family         |
| CH32       | Makan                   |
| CH89       | Viva Premium            |
| TV20       | Viva                    |
| PT60       | Viva Plus               |
| TV10       | E!                      |
| CN04       | Mediterranean Channel 2 |
| CH61       | Design Channel (DIY)    |
| PT94       | Discovery               |
| PT25       | National G.             |
| TV62       | Discovery Science       |
| CH71       | National G. Wild        |
| TV19       | History SD              |
| PT55       | History                 |
| TV61       | ANIMAL PLANET           |
| PT13       | DAYSTAR                 |
| CH58       | ONE2                    |
| TR01       | ONE                     |
| PT53       | Sport 1                 |
| PT98       | Sport 2                 |
| CH09       | Sport 3                 |
| CH11       | Sport 4                 |
| PT26       | Sport 5                 |
| CH54       | Sport 5+                |
| MU03       | Sport 5 Gold            |
| PT62       | Sport 5 Live            |
| CH56       | Sport 5 Stars           |
| CH55       | Sport 5 4K              |
| PT39       | EUROSPORT               |
| CH33       | Eurosport 2             |
| PT22       | Sport 1 single (63)     |
| TV87       | CBS Reality             |
| PT12       | EGO                     |
| CH85       | MUTV                    |
| CH97       | Vacation Channel        |
| TV34       | FTV                     |
| CH62       | Style Channel           |
| CHN2       | ONE DOCO                |
| CHN3       | Sport Edge              |
| PT31       | MTV Club (MTV Dance)    |
| TV37       | MTV 00s (VH1)           |
| TV51       | MTV 80s (VH1 Classic)   |
| TV35       | MTV (MTV Music)         |
| PT50       | MTV Live                |
| CH91       | MTV HITS                |
| CH43       | TLC (78)                |
| CN09       | Childhood songs         |
| CH57       | Kan Educational         |
| TA02       | Baby                    |
| TV24       | HOP                     |
| PT46       | HOP! Childhood          |
| PT59       | Disney Junior           |
| PT69       | NICK Junior             |
| CH19       | Kids Stars Channel      |
| YSA4       | yes Movies Kids         |
| CH98       | ZOOM TOON               |
| PT91       | Disney                  |
| PT85       | ZOOM                    |
| NK01       | Nickelodeon             |
| CH13       | WiZ                     |
| TA05       | Junior                  |
| CH18       | TeenNick                |
| PT48       | JimJam                  |
| CN08       | Childhood               |
| PT30       | Hidabroot               |
| TV43       | Kehilaty (98)           |
| TV89       | Knesset                 |
| TV12       | CNN                     |
| TV42       | Sky News                |
| PT18       | FRANCE 24               |
| TV13       | Fox News                |
| TV59       | Bloomberg               |
| CN05       | France 24 fr            |
| PT17       | Al Jazeera English      |
| TV02       | METV                    |
| PT86       | Trace                   |
| PT06       | CGTN                    |
| CH50       | CGTN DOC                |
| PT02       | Bollywood               |
| CH68       | Bollyshow               |
| PT14       | Health Channel          |
| TV44       | RTL                     |
| TV46       | SAT 3                   |
| TV45       | SAT 1                   |
| TV79       | GTV                     |
| TV49       | TVE                     |
| PT11       | TVR i                   |
| TV57       | PROTV                   |
| TV98       | ZEETV                   |
| PT64       | Mediaset                |
| CH74       | FRANCE3                 |
| TV94       | France 2 (F2)           |
| TV47       | ARTE                    |
| TV56       | EUROSTAR                |
| TV77       | RTM                     |
| PT19       | IETV                    |
| CH87       | ROTANA Cinema           |
| TV71       | LBC                     |
| TV73       | ROTANA                  |
| TV76       | Al Jazeera              |
| TV81       | Channel 1 Rus           |
| TV82       | RTR                     |
| CN03       | Dom Kino Premium        |
| TV85       | NASHE KINO              |
| CH24       | REN TV                  |
| PT73       | VREMYA                  |
| PT74       | TELECAFE                |
| CH76       | Bober                   |
| CH23       | Current Time            |
| PT51       | CTC                     |
| TV60       | NTV MIR                 |
| PT45       | TVCI                    |
| PT15       | 1+1                     |
| PT36       | Dom Kino                |
| CH79       | Music IL                |
| CH27       | IDXTRA                  |
| CH41       | Classica                |
| CH29       | SHANSON TV              |
| TV65       | Russian MusicBox        |
| PT61       | Carousel                |
| PT78       | Disney Junior RUS       |
| PT83       | JimJam RUS              |
| CH14       | Baby (RUS)              |
| CN02       | Kan LL                  |
| PT05       | Blue HUSTLER            |

## Credits

- [ofekashery](https://github.com/ofekashery)
