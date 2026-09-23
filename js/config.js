window.ALAD_CONFIG = {
  "stageWidth": 768,
  "stageHeight": 384,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": true,
  "clockTimezone": "America/Lima",
  "projectId": "p_mud3izmsfbdcni",
  "backgrounds": [
    {
      "id": "b_mue7fxu5pxscb4",
      "type": "image",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mud3izmsfbdcni/1790174111740_atl_feria_de_carreras_usil_oct111.png",
      "duration": 8,
      "breakpoints": null,
      "condition": null
    }
  ],
  "resources": [
    {
      "id": "r_mud38smjscovde",
      "type": "countdown",
      "target": "2026-10-04T04:59:00.000Z",
      "tokenPrefix": "cuenta-regresiva-1"
    }
  ],
  "weather": {
    "enabled": false,
    "lat": -12.0464,
    "lon": -77.0428,
    "city": "Lima",
    "unit": "celsius",
    "refresh": 15
  },
  "apiRefreshMin": 1,
  "breakpoints": [
    {
      "id": "bp_mud3rihoyk085n",
      "maxWidth": 800,
      "width": 800,
      "height": 420
    }
  ],
  "elements": [
    {
      "id": "e_mud3izmsr3jr0g",
      "resourceId": "",
      "type": "text",
      "enabled": true,
      "x": 52.9,
      "y": 24.7,
      "width": 46.9,
      "height": 16.8,
      "align": "center",
      "zIndex": 2,
      "fontSize": 45,
      "fontWeight": "700",
      "color": "#ffd100",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "TuskerGrotesk-6500Medium",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {},
      "text": "Faltan"
    },
    {
      "id": "e_mud3izmsigwalo",
      "resourceId": "",
      "type": "text",
      "enabled": true,
      "x": 69.7,
      "y": 52.4,
      "width": 28.9,
      "height": 27.4,
      "align": "center",
      "zIndex": 2,
      "fontSize": 82,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "TuskerGrotesk-6500Medium",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {},
      "text": "días"
    },
    {
      "id": "e_mue7257eem3p1v",
      "resourceId": "r_mud38smjscovde",
      "type": "countdown",
      "enabled": true,
      "x": 47.6,
      "y": 40.3,
      "width": 30.9,
      "height": 41.9,
      "align": "center",
      "zIndex": 2,
      "fontSize": 132,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "TuskerGrotesk-6700Bold",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {},
      "countdownTarget": "2026-10-22T19:51:34.388Z",
      "countdownLabels": false,
      "padZero": true,
      "countdownShowDays": true,
      "countdownShowHours": false,
      "countdownShowMinutes": false,
      "countdownShowSeconds": false
    }
  ]
};
