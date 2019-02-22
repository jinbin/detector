module.exports = {
  "env": "online",
  "daily":
  {
   "url": "http://10.37.3.114:8080",
    // "url": "http://172.19.31.50:8080",
    "infoPath": "/rest/api/1/issue/info",
    "createPath": "/rest/api/1/issue/create1"
  },
  "pre":
  {
    "url": "http://10.2.152.100:8080/",
    "infoPath": "/rest/api/1/issue/info",
    "createPath": "/rest/api/1/issue/create1"
  },
  "online":
  {
    "url": "https://bulbul.weidian.com",
    "infoPath": "/rest/api/1/issue/info",
    "createPath": "/rest/api/1/issue/create1"
  }
}
