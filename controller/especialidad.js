const especialidad = require('../model/especialidad')

const getAllEspecialidades = async (req, res, next) => {
  const lista = await especialidad.getAllEspecialidades()
  res.json(lista)
}

const postEspecialidad = async (req, res, next) => {
  let response = {status: 0, message:''}
  if (!req.body) {
    response.message = 'Información no enviada'
    res.json(response)
  }
  console.log(req.body)
  const result = await especialidad.postEspecialidad(req.body)
  console.log(result)

  response.status = 1
  response.message = 'inserted'
  response.result = result
  res.json(response)
}

const putEspecialidad = async (req, res, next) => {
  let response = {status: 0, message:''}
  if (!req.body) {
    response.message = 'Información no enviada'
    res.json(response)
  }

  const result = await especialidad.putEspecialidad(req.body)
  response.status = 1
  response.message = 'updated'
  response.result = result
  res.json(response)
}

const deleteEspecialidad = async (req, res, next) => {
  const id = req.params.id
  let response = {status: 0, message:''}
  if (!id) {
    response.message = 'Id no válido'
    res.json(response)
  }

  const result = especialidad.deleteEspecialidad(id)
  response.status = 1
  response.message = 'deleted'
  response.result = result
  res.json(response)
}

exports.getAllEspecialidades  = getAllEspecialidades
exports.postEspecialidad      = postEspecialidad
exports.putEspecialidad       = putEspecialidad
exports.deleteEspecialidad    = deleteEspecialidad
