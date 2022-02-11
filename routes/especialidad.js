const { route } = require('../app')

const express = require('express')
const router = express.Router()
const especialidad = require('../controller/especialidad')

router.get('/',       especialidad.getAllEspecialidades)
router.post('/',      especialidad.postEspecialidad)
router.put('/',       especialidad.putEspecialidad)
router.delete('/:id', especialidad.deleteEspecialidad)

module.exports = router
