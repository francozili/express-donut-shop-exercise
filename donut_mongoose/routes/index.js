let express = require('express')
let router = express.Router()
const donutController = require('../controllers/donuts.js')
const ingredientController = require('../controllers/ingredients.js')

//= =====================
// INDEX
//= =====================
// Create a GET index route "/" that triggers the donut controller index function
router.get('/',donutController.index)


//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that triggers the donut controller new function
router.get('/new',donutController.new)

router.get("/cart",donutController.cart)

//= =====================
// SHOW
//= =====================
// Create a GET show route "/:id" that triggers the donut controller show function
// router.get('/:id',donutController.show)

router.get('/:id',donutController.show)

//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that triggers the donut controller create function

router.post('/',donutController.create)

//= =====================
// EDIT
//= =====================
// Create a GET edit route "/:id/edit" that triggers the donut controller edit function

router.get("/:id/edit",donutController.edit)


//= =====================
// UPDATE
//= =====================
// Create a PUT update route "/:id" that triggers the donut controller update function
router.put("/:id",donutController.update)
// Create a PATCH update route "/:id" that triggers the donut controller update function
// router.get('/:id',donutController.put)


router.put("/:id/buy",donutController.buy)

//= =====================
// DELETE
//= =====================
// Create a DELETE delete route "/:id" that triggers the donut controller delete function
// router.get('/:id',donutController.delete)
router.delete('/:id',donutController.delete)


router.get("/:id/ingredient/:ingredientId", ingredientController.show)
router.post('/:id/ingredient', ingredientController.create)
router.get("/:id/ingredient/:ingredientId/edit", ingredientController.edit)
router.put("/:id/ingredient/:ingredientId/", ingredientController.update)
router.delete('/:id/ingredient/:ingredientId', ingredientController.delete)



module.exports = router
