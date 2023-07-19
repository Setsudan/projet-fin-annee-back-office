migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8gzf0s3vd23bhbs")

  collection.viewRule = "@request.auth.verified = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8gzf0s3vd23bhbs")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
