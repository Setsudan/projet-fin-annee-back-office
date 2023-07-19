migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npygrg6l254z6kg")

  collection.viewRule = "@request.auth.verified = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npygrg6l254z6kg")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
