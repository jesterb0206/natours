# Natours

## License

<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[This application is under the MIT license](https://opensource.org/licenses/MIT)

<br>

## Deployment Link

<br>

[Deployment](https://natours-production-0a23.up.railway.app) Click here!

<br>

## Description

<br>

### What I Learned

1. Accepting credit card payments with Stripe
2. Advanced data modeling: relationships between data, embedding, referencing, etc.
3. Advanced error handling workflows
4. Advanced MongoDB: aggregation pipeline, geospatial queries, operators, etc.
5. Advanced Mongoose: indexes, modeling geospatial data, populates, virtual populates, etc.
6. Authorization (user roles)
7. Complete modern authentication with JWT: user sign up, log in, password reset, secure cookies, etc.
8. CRUD operations with a MongoDB database locally and in the cloud on Atlas
9. Deploying a Node.js application to production with Railway
10. Fundamentals of Express.js: middleware, routing, sending responses, etc.
11. Fundamentals of Mongoose: CRUD operations, data models, data validation, and middleware
12. Fundamentals of Node.js, including core modules and NPM
13. How Node.js works behind the scenes: blocking vs. non-blocking code, event-driven architecture, the event loop, modules, streams, etc.
14. How to work with data in NoSQL databases
15. RESTful API design and development with advanced features: aliasing, filtering, pagination and sorting
16. Security: best practices, encryption, rate limiting, sanitization, etc.
17. Sending emails with Mailtrap
18. Server-side website rendering with Pug templates
19. Uploading files and image processing
20. Using the MVC (Model-View-Controller) architecture

<br>

### Issues I Encountered

<br>

![Content Security Policy Issues](public/img/issues/content-security-policy.png)

<br>

Originally I was using an NPM package called helmet to set HTTP security headers but I ended up uninstalling it (along with hpp, mongoSanitize, rateLimit and xss) because I kept getting Content-Security-Policy errors that I didn't know how to remedy (in hindsight I believe the errors may have only been coming from helmet and xss). Eventually I would like to go back and re-implement those security measures once I better know how to define valid sources.

<br>

![SendGrid Issue](public/img/issues/send-grid.png)

<br>

In development I was using Mailtrap to test sending password reset/new user emails with Pug email templates. However, in production I wanted to use Twilio's SendGrid to send automated emails to users. I wrote code to implement that SendGrid feature but decided not to proceed forward as I didn't feel comfortable listing my mailing address in every promotional email I sent to comply with anti-spam laws. Now I'm hoping to find a new way to send automated emails to users without exposing my private information.

<br>

![Railway Issue](public/img/issues/railway.png)

<br>

At the very end of the Udemy course I was going to deploy my web application to Heroku and implement Stripe webhooks as that's something I wanted to save for after the deployment process. However, when I deployed my web app to Heroku my app kept crashing and I was having a hard time parsing the logs for what was causing my app to crash. In order to get my app to be successfully deployed online I decided to use a different hosting platform called Railway, though, the instructor was teaching us about how to integrate Stripe webhooks with Heroku, and when I was following along I couldn't get Stripe webhooks to not crash my app. Right now Stripe Checkout works, but the implementation is unsecure because theoretically anybody could make a booking without paying if they knew how to cheat the system. This is a major issue that I'm hoping to learn how to fix here soon!

<br>

![Responsiveness Issue](public/img/issues/responsiveness.png)

<br>

<br>

![CSS Issue](public/img/issues/css.png)

<br>

When I began the Udemy course I was given a starter file containing all the CSS for the final project (it's over 1,300 lines). You could technically say the CSS is responsive as it adjusts the sizing of elements and their layout depending on the width of the viewport. However, a lot of css uses units of measurement such as vh and vw, which causes the elements to look extremely narrow on smaller viewports and extremely wide on larger viewports. This is an issue that I don't think would be extremely difficult to solve but would take awhile as I would have to change dozens and dozens of units of measurement.

<br>

## Views From Development

<br>

### MongoDB Compass

<br>

![MongoDB Compass](public/img/development/compass.png)

<br>

### Compression

<br>

![Compression](public/img/development/compression.png)

<br>

### Mailtrap

<br>

![Mailtrap](public/img/development/mailtrap.png)

<br>

### Mapbox

<br>

![Mapbox](public/img/development/mapbox.png)

<br>

### Postman

<br>

![Postman](public/img/development/postman.png)

<br>

### Stripe

<br>

![Stripe](public/img/development/stripe.png)

<br>

## Views From Production

<br>

### All Tours / Homepage

<br>

![All Tours/Homepage](public/img/production/all-tours.png)

<br>

### Log In

<br>

![Log In](public/img/production/log-in.png)

<br>

### Individual Tour

<br>

![Tour Picture 1](public/img/production/tour-picture-1.png)

<br>

<br>

![Tour Picture 2](public/img/production/tour-picture-2.png)

<br>

<br>

![Tour Picture 3](public/img/production/tour-picture-3.png)

<br>

<br>

![Tour Picture 4](public/img/production/tour-picture-4.png)

<br>

### Stripe Checkout

<br>

![Stripe Checkout 1](public/img/production/stripe-checkout-1.png)

<br>

<br>

![Stripe Checkout 2](public/img/production/stripe-checkout-2.png)

<br>

### My Bookings

<br>

![My Bookings](public/img/production/my-bookings.png)

<br>

### Choose New Photo

<br>

![Choose New Photo](public/img/production/choose-new-photo.png)

<br>

### Change Password

<br>

![Change Password](public/img/production/change-password.png)

<br>

## Languages and Tools

<br>

<a href="https://axios-http.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/axios/axios-icon.svg" alt="axios" width="80" height="80"/> </a> <p align="left"> Axios is a simple promise based HTTP client for the browser and Node.js. </p>

<a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="80" height="80"/> </a> <p align="left"> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. </p>

<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" width="80" height="80"/> </a> <p align="left"> Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. </p>

<a href="https://eslint.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg" alt="eslint" width="80" height="80"/> </a> <p align="left"> ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline. </p>

<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="express" width="80" height="80"/> </a> <p align="left"> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. </p>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80"/> </a> <p align="left"> JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. </p>

<a href="https://www.mongodb.com/home" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongo" width="80" height="80"/> </a> <p align="left"> The developer data platform that provides the services and tools necessary to build distributed applications fast, at the performance and scale users demand. </p>

<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="node" width="80" height="80"/> </a> <p align="left"> Node.js® is an open-source, cross-platform JavaScript runtime environment. </p>

<a href="https://nodemon.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-icon.svg" alt="nodemon" width="80" height="80"/> </a> <p align="left"> Nodemon is a utility depended on about 3 million projects, that will monitor for any changes in your source and automatically restart your server. Perfect for development. </p>

<a href="https://parceljs.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/parceljs/parceljs-icon.svg" alt="parcel" width="80" height="80"/> </a> <p align="left"> Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application. </p>

<a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="80" height="80"/> </a> <p align="left"> Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster. </p>

<a href="https://pugjs.org/api/getting-started.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pugjs/pugjs-icon.svg" alt="pug" width="80" height="80"/> </a> <p align="left"> Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. </p>

<a href="https://stripe.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" alt="stripe" width="80" height="80"/> </a> <p align="left"> Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online. </p>

<br>

## Additional Languages and Tools

<br>

<p align="left"> <a href="https://www.npmjs.com/package/bcrypt" target="_blank" rel="noreferrer"> bcrypt </a> A library to help you hash passwords. </p>

<p align="left"> <a href="https://www.npmjs.com/package/compression" target="_blank" rel="noreferrer"> compression </a> Node.js compression middleware. </p>

<p align="left"> <a href="https://www.npmjs.com/package/cookie-parser" target="_blank" rel="noreferrer"> cookie-parser </a> Parse Cookie header and populate req.cookies with an object keyed by the cookie names. </p>

<p align="left"> <a href="https://www.npmjs.com/package/cors" target="_blank" rel="noreferrer"> cors </a> CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. </p>

<p align="left"> <a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noreferrer"> dotenv </a> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. </p>

<p align="left"> <a href="https://www.npmjs.com/package/html-to-text" target="_blank" rel="noreferrer"> html-to-text </a> Advanced converter that parses HTML and returns beautiful text. </p>

<p align="left"> <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank" rel="noreferrer"> jsonwebtoken </a> An implementation of JSON Web Tokens. </p>

<p align="left"> <a href="https://www.npmjs.com/package/mongoose" target="_blank" rel="noreferrer"> mongoose </a> Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. </p>

<p align="left"> <a href="https://www.npmjs.com/package/morgan" target="_blank" rel="noreferrer"> morgan </a> HTTP request logger middleware for Node.js. </p>

<p align="left"> <a href="https://www.npmjs.com/package/multer" target="_blank" rel="noreferrer"> multer </a> Multer is a Node.js middleware for handling multipart/form-data, which is primarily used for uploading files. </p>

<p align="left"> <a href="https://www.npmjs.com/package/nbd" target="_blank" rel="noreferrer"> nbd </a> nbd.js is not Yet Another MVC Framework in that it does not seek to be the end-all of client-side MVC/MVVM/MVP/MVW/etc needs. You can use it as a standalone MVC framework, or in conjunction with any other frameworks. Use as much or as little of nbd.js as you like, because it is designed to provide modular functionality. </p>

<p align="left"> <a href="https://www.npmjs.com/package/nodemailer" target="_blank" rel="noreferrer"> nodemailer </a> Send emails from Node.js – easy as cake! 🍰 ✉️ </p>

<p align="left"> <a href="https://www.npmjs.com/package/prettier" target="_blank" rel="noreferrer"> prettier </a> Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. </p>

<p align="left"> <a href="https://www.npmjs.com/package/sharp" target="_blank" rel="noreferrer"> sharp </a> The typical use case for this high speed Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP, GIF and AVIF images of varying dimensions. </p>

<p align="left"> <a href="https://www.npmjs.com/package/slugify" target="_blank" rel="noreferrer"> slugify </a> Slugifies a String. </p>

<p align="left"> <a href="https://www.npmjs.com/package/validator" target="_blank" rel="noreferrer"> validator </a> A library of string validators and sanitizers. </p>

<br>
