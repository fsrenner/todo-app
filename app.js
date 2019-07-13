const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const morgan = require('morgan');
const { urlencoded, json } = require('body-parser');

const PORT = process.env.PORT || 3000;

/**
 * todo creates a new Mongoose Schema that defines the
 */
const todo = new mongoose.Schema({
   id: {
      type: Number,
      required: true
   },
   item: {
      type: String,
      required: true
   },
   completed: {
      type: Boolean,
      required: true
   }
});

const Todo = mongoose.model('todo', todo);

app.use(morgan('dev'));
app.use(urlencoded({extended: true}));
app.use(json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
   res.render('index', { title: 'Express' });
});

/**
 * This route will get all of the records found in the database
 */
app.get('/todos', async (req, res) => {
   try {
      res.status(200).json(await Todo.find({}).lean().exec());
   } catch (e) {
      console.log(e);
      res.status(500).send();
   }

});

app.post('/todo', async (req, res) => {
   const todoCreated = req.body;
   try{
      const todo = await Todo.create(todoCreated);
      console.log(`Created todo: ${todo}`);
      res.status(200).json(await Todo.find({}).lean().exec());
   } catch (e) {
      console.log(e);
      res.status(500).send();
   }
});

/**
 * Update one record
 */
app.put('/todo/:id/:completed', async (req, res) => {
   const updateId = req.params.id;
   const completed = req.params.completed;
   try{
      const findTodo = await Todo.updateOne(
          { _id: updateId },
          { completed: completed},
          { new: true }
      );
      console.log(`Updated todo. New todo: ${findTodo}`);
      res.status(200).json(await Todo.find({}).lean().exec());
   } catch (e) {
      console.log(e);
      res.status(500).send();
   }
});

/**
 * Update multiple records as completed or not
 */
app.put('/todos/selected/:completed', async (req, res) => {
   const completed = req.params.completed;
   const updateTodos = req.body;
   try{
      for(let i = 0; i < updateTodos.length; i++) {
         updateTodos[i].completed = completed;
         const findTodo = await Todo.updateOne(
             { _id: updateTodos[i]._id},
             { completed: completed },
             { new: true }
         );
         console.log(`Updated todo. New todo: ${findTodo}`);
      }
      res.status(200).json(await Todo.find({}).lean().exec());
   } catch (e) {
      console.log(e);
      res.status(500).send();
   }
});

/**
 * Update all records as completed or not
 */
app.put('/todos/all/:completed', async (req, res) => {
   const completed = req.params.completed;
   try{
      const findTodo = await Todo.updateMany(
          {},
          { completed: completed }
      );
      console.log(`Updated todo. New todo: ${findTodo}`);
      res.status(200).json(await Todo.find({}).lean().exec());
   } catch (e) {
      console.log(e);
      res.status(500).send();
   }
});


/**
 * Delete one record
 */
app.delete('/todo/:id', async (req, res) => {
   const deleteId = req.params.id;
   console.log(`Received id: ${deleteId}`);
   try {
      const deletedId = await Todo.findOneAndRemove(deleteId);
      console.log(`Successfully deleted record with id: ${deleteId}`);
      res.status(200).json(await Todo.find({}).lean().exec());
   } catch (e) {
      console.log(e);
      res.status(500).send();
   }
});

/**
 * Delete multiple records
 */
app.delete('/todos/selected', async (req, res) => {
   const updateTodos = req.body;

   try {
      for(let i = 0; i < updateTodos.length; i++) {
         const todoId = updateTodos[i]._id;
         const deletedId = await Todo.findOneAndRemove(todoId);
         console.log(`Successfully deleted record with id: ${todoId}`);
      }
      res.status(200).json(await Todo.find({}).lean().exec());
   } catch (e) {
      console.log(e);
      res.status(500).send();
   }
});

/**
 * Delete all records
 */
app.delete('/todos/all', async (req, res) => {
   try {
      const deletedId = await Todo.deleteMany({});
      console.log(`Successfully deleted all records`);
      res.status(200).json(await Todo.find({}).lean().exec());
   } catch (e) {
      console.log(e);
      res.status(500).send();
   }
});


const connect  = () => {
   return mongoose.connect('mongodb://localhost:27017/todos');
};

connect()
    .then(async connection => {
       app.listen(PORT, (err) => {
          if (err) {
             throw new Error();
          } else {
             console.log('App listening on port: ' + PORT);
          }
       });
    })
    .catch(e => console.error(e));


module.exports = app;
