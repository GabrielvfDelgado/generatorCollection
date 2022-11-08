export const modelNewColletion =
{
  info: {
    name: null,
    schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [

  ],
  "auth": {
    "type": "bearer",
    "bearer": [
      {
        "key": "token",
        "value": "{{jwt}}",
        "type": "string"
      }
    ]
  },
  "event": [
    {
      "listen": "prerequest",
      "script": {
        "type": "text/javascript",
        "exec": [
          ""
        ]
      }
    },
    {
      "listen": "test",
      "script": {
        "type": "text/javascript",
        "exec": [
          ""
        ]
      }
    }
  ]
};

export const item = {
  name: null,
  request: {
    method: null,
    header: [
    ],
    url: {
      raw: null,
      host: [
      ],
      query: [
      ]
    }

  },
  response: [

  ]

};

export const corpo = {
  "name": null,
  item: [
  ]
}

