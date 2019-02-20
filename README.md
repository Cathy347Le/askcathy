# Ask Cathy App

Solo MEHN Lab: stackOverflow project

Built an app using full CRUD

1. Create index.js
2. Test if you're able to connect to Express and send hello world to the browser
3. Install necessary dependencies
4. commit
5. Create file system
6. commit
7. create routes and test hello world first
8. build out the controllers and test that the routes still work
9. Work on views - install body parser
10. create a simple view for each hbs file. Use a header tag and check that it renders

#File System

-Post Question
-title
-description

Directories
Routes - index.js, question.js
Controllers - question.js
Views - index.hbs and layout.hbs, question directory with new, show, and edit, hbs
Models - index.js
db - connection.js and seed.js

- Submit answers
  -solution

Note the relationship between the two. There can be many questions. A question can have many solutions. A solution cannot have a question.

Bronze plan: Create, Read, Update, and Delete a question.

Gold plan is to add answer model
