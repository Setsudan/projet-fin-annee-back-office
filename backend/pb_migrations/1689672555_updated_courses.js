migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8gzf0s3vd23bhbs")

  collection.listRule = "@request.auth.role = \"regisseur\" || @request.auth.role = \"teach\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8gzf0s3vd23bhbs")

  collection.listRule = null

  return dao.saveCollection(collection)
})
