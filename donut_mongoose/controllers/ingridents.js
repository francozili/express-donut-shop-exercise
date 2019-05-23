// require the any models needed models
const Ingredient = require("../models/Ingredient");

const ingredientController = {

  //= =====================
  // SHOW
  //= =====================
  
  show: function(req, res) {
    Ingredient.findById(req.params.ingredientId).then(ingredient => {
      res.render("ingredient/show", {ingredient});
    });
  },

  //= =====================
  // CREATE
  //= =====================

  create: function(req, res) {
    console.log(req);
    Ingredient.create(req.body).then(() => res.redirect(`/${req.params.id}`));
  },
  //= =====================
  // EDIT
  //= =====================
 
  edit: function(req, res) {
    Ingredient.findById(req.params.ingredientId).then(ingredient => {
      res.render("ingredient/edit", { ingredient });
    });
  },
  //= =====================
  // UPDATE
  //= =====================

  // redirects back to the Donut SHOW PAGE 
  update: function(req, res) {
    Ingredient.findByIdAndUpdate(req.params.ingredientId, req.body, { new: true }).then(() => {
      res.redirect(`/${req.params.id}/ingredient/${req.params.ingredientId}`);
    });
  },

  //= =====================
  // DELETE
  //= =====================

  delete: function(req, res) {
    Ingredient.findByIdAndRemove(req.params.ingredientId).then(() => {
      res.redirect(`/${req.params.id}`);
    });
  }
};

module.exports = ingredientController;
