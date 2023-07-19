migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6rj2wd7e5atyn6")

  collection.createRule = "@request.auth.role = \"teach\" ||@request.auth.role = \"regisseur\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6rj2wd7e5atyn6")

  collection.createRule = null

  return dao.saveCollection(collection)
})
