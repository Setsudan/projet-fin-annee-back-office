migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npygrg6l254z6kg")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npygrg6l254z6kg")

  collection.listRule = null

  return dao.saveCollection(collection)
})
