const express = require("express");

const router = express.Router();

const controller = require("../controllers/bases.controller");

router.get("/bases", controller.obtenerBases);

router.get("/bases/:id", controller.obtenerBasesPorId);




module.exports = router;