migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6rj2wd7e5atyn6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ev4u3uk7",
    "name": "related_class",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "11s1x3qm2p4xm11",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6rj2wd7e5atyn6")

  // remove
  collection.schema.removeField("ev4u3uk7")

  return dao.saveCollection(collection)
})
