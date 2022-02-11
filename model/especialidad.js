const knex = require('./util')

const tableName = 'especialidad'

const getAllEspecialidades = async () => {
  const result = await knex(tableName).select()
  return result
}

const postEspecialidad = async (data) => {
  const result = await knex(tableName).insert(data);
  return result.rowCount
}

const putEspecialidad = async (data) => {
  const result = await knex(tableName).where('id', data.id).update(data)
  return result
}

const deleteEspecialidad = async (id) => {
  const result = await knex(tableName).where('id', id).del()
  return result
}

exports.getAllEspecialidades  = getAllEspecialidades
exports.postEspecialidad      = postEspecialidad
exports.putEspecialidad       = putEspecialidad
exports.deleteEspecialidad    = deleteEspecialidad
