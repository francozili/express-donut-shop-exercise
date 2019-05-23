//= =====================
// REQUIREMENTS
//= =====================
// require the Donut model
const Donut = require("../models/Donut");
const Ingredient = require('../models/Ingredient')

const donutController = {
  //= =====================
  // INDEX
  //= =====================
  // Create a function sends all Donuts to donuts/index.hbs view
  index: function(req, res) {
    Donut.find().then(donuts => {
      res.render("donuts/index", { donuts });
    });
  },
  //= =====================
  // NEW
  //= =====================
  // Create a function that renders the new.hbs form
  new: function(req, res) {
    res.render("donuts/new");
  },
  //= =====================
  // SHOW
  //= =====================
  // Create a function that renders a single Donut's show page
  show: function(req, res) {
    Donut.findById(req.params.id).then(donut => {
      Ingredient.find({donutId: req.params.id}).then((ingredients)=>{
        console.log(donut)
        console.log(ingredients)
        res.render("donuts/show", { donut, ingredients });
      })
     
    });
  },
  //= =====================
  // CREATE
  //= =====================
  // Create a function that creates a new Donut
  // and upon success redirects back to the index page "/"
  create: function(req, res) {
    console.log(req);
    Donut.create(req.body).then(() => res.redirect("/"));
  },
  //= =====================
  // EDIT
  //= =====================
  // Create a function that renders the edit.hbs page and
  // sends that a Donut's data to it
  edit: function(req, res) {
    Donut.findById(req.params.id).then(donut => {
      res.render("donuts/edit", { donut });
    });
  },
  //= =====================
  // UPDATE
  //= =====================
  // Create a function that updates the Donut and
  // redirects back to the SHOW PAGE (not index)
  update: function(req, res) {
    Donut.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
      res.redirect("/" + req.params.id);
    });
  },
  boughtItems: [],
  buy: function(req, res) {
    Donut.findById(req.params.id).then(donut => {
      donut.qty -= 1;
      Donut.findByIdAndUpdate(req.params.id, donut).then(() => {
        //this
        donutController.boughtItems.push(donut)
        res.redirect("/" + req.params.id);
      });
    });
  },

  cart: function(req, res) {
    console.log(donutController.boughtItems);
    res.render("donuts/cart", {boughtItems:donutController.boughtItems});
  },
  //= =====================
  // DELETE
  //= =====================
  // Create a function that deletes the Donut and
  // redirects back to index page "/"
  delete: function(req, res) {
    Donut.findByIdAndRemove(req.params.id).then(() => {
      res.redirect("/");
    });
  }
};

//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = donutController;
