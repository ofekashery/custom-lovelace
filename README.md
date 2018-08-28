# Lovelace Custom Cards
Custom cards for Lovelace UI in [Home Assistant](https://github.com/home-assistant/home-assistant)

## FAQ
### I have added the custom card javascript file in my www folder, but it doesn't load, why?
If this was the first time you created the www folder in your config than you **MUST** restart Home Assistant.


### I get a error with n.setConfig' is undefied, how do i fix this?
This is usually caused by running an older frontend. If you're already running 0.73 or newer please make sure you have cleared browser cache. On mobile app you can also force a few refreshes. If you're running IOS device check next question.


### The card don't load on my iOS device
You can resolve this issue by upgrading to Home Assistant 0.76 or later. If you are on an older version, make sure you have javascript_version: latest in your configuration.yaml under frontend.


### I get a error 'Uncaught SyntaxError: Unexpected token <'
This is most likely because you downloaded the html from gitbut instead of raw. That is not valid javascript. Always make sure you download using raw button. After downloading the file again with the 'raw' button, remember to bump the version number for the custom component speficied in the 'resources' of your lovelace-ui.yaml file.


### I am running Firefox but the card look bad or don't load at all. How do I fix this?
This is probably because your version of Firefox doesn't have custom components supported or enabled. Please set to `true` in your `about:config` the following settings: `dom.webcomponents.customelements.enabled` and `dom.webcomponents.shadowdom.enabled`
