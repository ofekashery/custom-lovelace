# Israeli Broadcast Schedule Card
Israeli Broadcast Schedule Card allows you to show broadcast schedule for a channel.
#### Please ⭐ this repo if you find it useful

<img src="https://user-images.githubusercontent.com/16443111/44153230-58c07428-a0b0-11e8-9c80-e19347bd481a.png" width="500">


## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `israeli-broadcast-schedule-card`
| channel | string | **Required** | Channel code from the list below
| title | string | Optional | Card title
| max | int | Optional | Max items(Not including the current show)

## Installation

1. Install the `israeli-broadcast-schedule-card` card by copying `israeli-broadcast-schedule-card` to `<config directory>/www/israeli-broadcast-schedule-card`

2. Link `israeli-broadcast-schedule-card` inside you `ui-lovelace.yaml` 
```yaml
resources:
  - url: /local/israeli-broadcast-schedule-card.js?v=0.0.1
    type: js
```

3. Add a channel in your `ui-lovelace.yaml`

## Example

```yaml
- type: custom:israeli-broadcast-schedule-card
  title: לוח שידורים לערוץ רשת 13
  channel: CH36
  max: 2
```

## Channels Code
Channel Name  | Code
------------- | -------------
yes1 HD       | YES1
yes2 HD       | YES2
yes3 HD       | YES3
yes4 HD       | YES6
yes5 HD       | YES4
yes Israeli Cinema | YSAU
yes Docu      | YSAT
Channel 9     | TV50
Kan 11        | CH30
Keshet 12     | CH34
Reshet 13     | CH36
Reshet 13     | CH36
Channel 10    | TV04
yesComedy     | YESP
yesDrama      | YESU
yesAction     | YESV
yesOh         | YSAR
AMC           | CH06
Channel 20    | PT92
Channel 21    | TV21
Channel 23    | TV23
Channel 24    | TV67
Channel 26    | PT72
Travel Channel | PT28
Food Channel  | PT20
Health Channel | PT14
Hala TV       | PT63
Lifestyle     | TV09
Home +        | PT41
Makan         | CH32
Viva          | TV20
E             | TV10
Lifetime      | PT10
Discovery science | TV62
Discovery science HD | CH16
Discovery     | TV18
National Geographic | TV17
National Geographic HD | PT25
NG WILD       | PT35
History       | TV19
CBS Reality   | TV87
Animal Planet | TV61
Daystar       | PT13
One           | PT54
Sport 1       | PT22
Sport 1 HD    | PT53
Sport 2 HD    | PT23
Sport 3 HD    | CH09
Sport 4 HD    | CH11
Sport 5       | TVR5
Sport 5 HD    | I004
Sport 5 Plus  | TV16
Sport 5 Gold  | MU03
Sport 5 Live  | PT62
Sport 5 HD    | PT26
Eurosport     | TV29
Eurosport 2   | CH33
Fox           | TV30
Extreme Sports | TV32
Ego           | PT12
Ego Total     | PT29
Trace         | PT86
BBC Entertainment | TV28
Fox news      | TV40
MTV Dance     | PT31
VH1           | TV37
VH1 Classic   | TV51
MTV Music     | TV86
FTV           | TV34
Greek Channel | CH17
JimJam        | PT48
Baby          | TA02
Hop           | TV24
Hop Israeli   | PT46
Baby          | TA02
Disney Junior | PT59
Nick Junior   | PT69
Stars Channel | CH19
Zoom          | PT85
Disney        | PT43
kidZ          | CH15
Nick          | NK01
Wiz           | CH13
Junior        | TA05
Teennick      | CH18
Mair          | PT89
Channel 98    | TV43
Knesset       | TV89
yesNews       | I002
CNN           | TV12
Sky News      | TV42
France24      | PT18
Bloomberg     | TV59
Aljazeera EN  | PT17
FOX Sport     | TV02
CGTV          | TV02
NHK World     | PT44
Bollywood     | PT02
RTL           | TV44
3 sat         | TV46
Sat.1         | TV45
GTV           | TV79
tve           | TV79
TVRi          | PT11
Pro           | PT11
Zee TV        | TV98
Mediaset Italia | PT64
RTM           | TV77
arte          | TV47
TV5MONDE      | TV48
France.2      | TV94
Eurostar      | TV56
Ethiopian TV  | PT19
mbc           | TV70
LBC           | TV71
ROTNA         | TV73
RT AR         | PT42
Russian Channel1 | TV81
Planeta RTR   | TV82
RTVI          | TV83
NasheKino     | TV85
Baby          | CH14
EuroSport     | PT39
ONE 4K        | CH21
FOX Sport     | PT49
Touch         | TV64

## Credits
- [ofekashery](https://github.com/ofekashery)
