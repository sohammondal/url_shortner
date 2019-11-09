
  

<h1>🔗 Urily - a simple URL Shortner Service</h1>

  

<p>

  

<img  alt="Version"  src="https://img.shields.io/npm/v/server.svg">

  

<img  src="https://img.shields.io/badge/npm-%3E%3D5.5.0-blue.svg"  />

  

<img  src="https://img.shields.io/badge/node-%3E%3D9.3.0-blue.svg"  />

  

<a  href="https://github.com/sohammondal/url_shortner#readme">

  

<img  alt="Documentation"  src="https://img.shields.io/badge/documentation-yes-brightgreen.svg"  target="_blank"  />

  

</a>

  

<a  href="https://github.com/sohammondal/url_shortner/graphs/commit-activity">

  

<img  alt="Maintenance"  src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"  target="_blank"  />

  

</a>

  

<a  href="https://github.com/sohammondal/url_shortner/blob/master/LICENSE">

  

<img  alt="License: ISC"  src="https://img.shields.io/badge/License-ISC-yellow.svg"  target="_blank"  />

  

</a>

  

<a  href="https://twitter.com/soham_sm_mondal">

  

<img  alt="Twitter: sohammondal_"  src="https://img.shields.io/twitter/follow/sohammondal_.svg?style=social"  target="_blank"  />

  

</a>

  

</p>

  

  

> This is the URL Shortner service build using MERN Stack

  

  

### 🏠 [Homepage](http://urily.sohammondal.com)

  

  

## Prerequisites

  

  

- npm >=5.5.0

  

- node >=9.3.0

  

  

## Local Development

  

### Install

<small> Install both client and server dependencies </small>

  

```bash

# Install dependencies for server
$ npm install

# Install dependencies for client
$ npm run client-install

```

  

### Configuration

  

<small> 1. Create a **nodemon.json** file in project root dir </small>

  

```bash

$ touch nodemon.json

```

  

<small> 2. Feed values to the file like this - </small>

  

```json

{

"env": {

"mongoURI": "",

"baseUrl": "http://localhost:5000",

"NODE_ENV": "development"

}

}

```

  

:information_source: <small> To get the **mongoURI**, you can install MongoDB [locally](https://docs.mongodb.com/manual/installation/) , use [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/) or simply use [MLab](https://mlab.com/).</small>

  
  

### Usage

  

```bash

# Run the client & server with concurrently
$ npm run dev

# Run the Express server only
$ npm run server

# Run the React client only
$ npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000

```

  

## Production Deployment

There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page

  

## Author

  

  

👤 **Soham Mondal**

  

  

* Twitter: [@sohammondal_](https://twitter.com/sohammondal_)

  

* Github: [@sohammondal](https://github.com/sohammondal)

  

* LinkedIn: [Soham Mondal](https://www.linkedin.com/in/soham-sm-mondal/)
* Website: [sohammondal.com](https://sohammondal.com)

  

  

## 🤝 Contributing

  

  

Contributions, issues and feature requests are welcome!<br  />Feel free to check [issues page](https://github.com/sohammondal/url_shortner/issues).

  

  

## Show your support

  

  

Give a ⭐️ if this project helped you!

  

  

## 📝 License

  

  

Copyright © 2019 [Soham Mondal](https://github.com/sohammondal).<br  />

  

This project is [ISC](https://github.com/sohammondal/url_shortner/blob/master/LICENSE) licensed.
