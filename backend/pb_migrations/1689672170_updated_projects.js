migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npygrg6l254z6kg")

  collection.updateRule = "@request.auth.role = \"regisseur\" || @request.auth.role = \"teach\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npygrg6l254z6kg")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
