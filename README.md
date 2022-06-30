# Twitter Clone

Title: Seally

Tweets = Barks

Using MERN stack: MongoDb, Express, React, Node.js

<hr>

Users will register + login:

- JWT (JSON web token)
- bcrypt

[tutorial for authentication](https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57)

^^^^^we can always use something else i just found this^^^

<hr>

Generally set up folder structure with this MongoDb tutorial:
[How to use MERN stack](https://www.mongodb.com/languages/mern-stack-tutorial)

Server dependencies so far:

- cors
- dotenv
- express
- mongodb
- mongoose (not included in tutorial but mongoose is nice to use esp. for models)

Client dependencies:

- react-router-dom

<hr>

## Server folder structure:

server.js : connect to server, add routes

db > conn.js : connect to database

models > mongoose schemas

routes > (self-explanatory) users, barks, register, login

config.env > environmental variables

<hr>

## Client folder structure:

public > static assets

src > components (independent, reusable bits of code that return HTML)

src > index.js App.js

<hr>
 please edit this as you please Samir!!
