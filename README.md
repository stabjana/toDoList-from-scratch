# ToDo App

Here we are creating a toDo app to practice Typescript in Express Servers and setting up Apps from scratch in a Backend environment.

## run the app

```shell
npm i
```

There is also a mongo.js file which contains the user and password for my mongodb, so I post it here. If you want to run the application, you need to create a user on your own account and paste the code with this code into your file, that you need to create first.
create a mongo.js file in your root folder, then do the steps above.

```js
const mongoose = require("mongoose");

const text = process.argv[2];

const url = "your url with user and password";

mongoose.set("strictQuery", false);

mongoose.connect(url);

const todoSchema = new mongoose.Schema({
  text: String,
});

const Todo = mongoose.model("Todo", todoSchema);

if (!text) {
  Todo.find({})
    .then((result) => {
      console.log("Todos:");
      result.forEach((todo) => {
        console.log(`${todo.text}`);
      });
    })
    .finally(() => {
      mongoose.connection.close();
    });
} else {
  const todo = new Todo({
    text: text,
  });

  todo.save().then(() => {
    console.log(`Added '${text}' to todos`);
    mongoose.connection.close();
  });
}
```

## run the app

run it with command line arguments

```shell
node mongo.js "<Whatever you want to save in the database>"
```
