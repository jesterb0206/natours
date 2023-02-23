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

## Table of Contents

<br>

- [Natours](#natours)
  - [License](#license)
  - [Deployment Link](#deployment-link)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
    - [What I Learned](#what-i-learned)
    - [Future Development Ideas](#future-development-ideas)
  - [Installation](#installation)
  - [Views From Development](#views-from-development)
    - [MongoDB Compass](#mongodb-compass)
    - [Compression](#compression)
    - [Mailtrap](#mailtrap)
    - [Mapbox](#mapbox)
    - [Postman](#postman)
    - [Stripe](#stripe)
  - [Views From Production / Usage](#views-from-production--usage)
    - [All Tours / Homepage](#all-tours--homepage)
    - [Log In](#log-in)
    - [Individual Tour](#individual-tour)
    - [Stripe Checkout](#stripe-checkout)
    - [My Bookings](#my-bookings)
    - [Choose New Photo](#choose-new-photo)
    - [Change Password](#change-password)
  - [Languages and Tools](#languages-and-tools)
  - [Additional Languages and Tools](#additional-languages-and-tools)
  - [Credits](#credits)
  - [Badges](#badges)
  - [How to Contribute](#how-to-contribute)
  - [My GitHub Profile](#my-github-profile)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

<br>

## Description

<br>

Natours is the final project for Jonas Schmedtmann's Udemy course, "**Node.js, Express, MongoDB & More: The Complete Bootcamp 2023**." Built with CSS, Express.js, JavaScript, a NoSQL database, and Pug Templates, Natours is a tour booking site that allows users to browse nature tours, "purchase" tours they wish to buy, view tours they've booked, update their login credentials and profile picture, and so much more! In this README I clue you in on my process, including issues I encountered during development, technologies I used to build this RESTful API, ideas I have for future development, and how you can contribute to this project moving forward! I hope you enjoy the final product as much as I do!

<br>

### What I Learned

<br>

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

### Future Development Ideas

<br>

1. Make it so that users can only review a tour that they've booked.
2. Implement nested booking routes: `/tours/:id/bookings` and `/users/:id/bookings`.
3. Add a `participants` and `sold out` field to each date, effectively making each date an instance of a tour. If a user wanted to book a tour, they'd have to make sure it wasn't sold out.
4. Implement advanced authentication features such as confirming a user's email when they sign up, keeping users logged in with refresh tokens, two-factor-authentication, etc.
5. Implement a sign-up form similar to the login form.
6. On the tour detail page, if a user has taken a tour, implement a form that allows them to add a review directly to the website.
7. Hide the entire booking section on the tour detail page if the current user has already booked the tour (also prevent duplicate bookings on the model).
8. Implement a feature where users can like tours.
9. On the user account page, implement the `My Reviews` page, where all reviews are displayed and allow users to edit their reviews.
10. For administrators, implement all of the `Manage` pages, allowing them to create, read, update and delete bookings, reviews, tours and users.
11. Addressing the issues I stated above.

<br>

## Installation

<br>

Clone the repository to your local machine, open your terminal, and navigate to the root folder in the **Natours** repository. To install the necessary dependencies, run `npm install` in your command-line terminal.

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

## Views From Production / Usage

<br>

### All Tours / Homepage

<br>

![All Tours/Homepage](public/img/production/all-tours.png)

<br>

To view the homepage navigate to this link:

<br>

https://natours-production-0a23.up.railway.app

<br>

### Log In

<br>

![Log In](public/img/production/log-in.png)

<br>

Right now the sign-up form is still in development. If you wish to log in and get the full user experience you can log in as Sophie Louise Hart with the email address `sophie@example.com` and the password `test1234`. You can also log in as Eduardo Hernandez with the email address `edu@example.com` and the password `test1234` as well!

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

To view any tour navigate to the homepage and click on the `Details` button of any tour you wish to view. To go back to the homepage click on the `All Tours` navigation bar button in the top left-hand corner of the screen. To book a tour simply click on the `Book Tour Now` button at the bottom of your screen.

<br>

### Stripe Checkout

<br>

![Stripe Checkout 1](public/img/production/stripe-checkout-1.png)

<br>

<br>

![Stripe Checkout 2](public/img/production/stripe-checkout-2.png)

<br>

If you wish to purchase a tour follow these steps:

1. Under `Card information` type **4242 4242 4242 4242** for the card number, **12/34** for expiration date, and **567** for the CVC.
2. Under `Name on card` feel free to enter any name you wish.
3. Under `Country or region` use **United States** for the country/region and **12345** for the ZIP.
4. Press the `Pay` button and wait a few seconds for the transaction to process.
5. You're all set! Congratulations on booking your first tour!

### My Bookings

<br>

![My Bookings](public/img/production/my-bookings.png)

<br>

To view your bookings click on your profile picture in the upper right-hand corner of the screen. Then, on the left-hand side of screen, underneath **Settings**, you should see **My Bookings**. If you click on it you'll be redirected to a page with the tour you just booked.

<br>

### Choose New Photo

<br>

![Choose New Photo](public/img/production/choose-new-photo.png)

<br>

To update your profile picture click on the `Choose New Photo` button in **Account Settings** (to navigate to your **Account Settings** click on your profile picture in the upper right-hand corner of the screen just like you did to view your bookings), select an image file, and press `Upload`. Then, press the `Save Settings` button and refresh the page to see your changes!

<br>

### Change Password

<br>

![Change Password](public/img/production/change-password.png)

<br>

To change your password click on your profile picture in the upper right-hand corner of the screen, scroll down to the bottom where it says `Change Password`, and type your **Current Password**, your **New Password** and your new password again to **Confirm Password** (please note a valid password is at least 8 characters in length). Finally, press the `Save Password` button and you're all good to go!

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

## Credits

<br>

This project was made possible thanks to **Jonas Schmedtmann**, the Udemy instructor who developed `Node.js, Express, MongoDB & More: The Complete Bootcamp 2023`. Down below is a link to his GitHub profile and the course on Udemy if you want to browse or take it:

<br>

<a href="https://github.com/jonasschmedtmann" target="_blank" rel="noreferrer"> Jonas Schmedtmann's GitHub profile </a>

<br>

<a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/" target="_blank" rel="noreferrer"> Jonas Schmedtmann's Node.js, Express, MongoDB & More Udemy course </a>

<br>

## Badges

<br>

![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

<br>

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<br>

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

<br>

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

<br>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<br>

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

<br>

![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

<br>

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

<br>

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

<br>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<br>

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

<br>

![Pug](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454)

<br>

![Udemy](https://img.shields.io/badge/Udemy-A435F0?style=for-the-badge&logo=Udemy&logoColor=white)

<br>

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<br>

## How to Contribute

<br>

If you want to contribute to the Natours API, please email me at:

<br>

![Microsoft Outlook](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)

<br>

jesterb@seattleu.edu

<br>

Any help is welcome, just message me first and I can add you as a collaborator!

<br>

## My GitHub Profile

<br>

[jesterb0206](https://www.github.com/jesterb0206)

<br>

![jesterb0206 GitHub Wrapped](public/img/github-wrapped.png)

<br>
