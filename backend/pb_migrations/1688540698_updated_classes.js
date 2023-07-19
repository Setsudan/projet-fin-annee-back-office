migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11s1x3qm2p4xm11")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11s1x3qm2p4xm11")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
