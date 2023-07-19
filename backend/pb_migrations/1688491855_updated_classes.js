migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11s1x3qm2p4xm11")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bsqjkg1c",
    "name": "teach",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11s1x3qm2p4xm11")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bsqjkg1c",
    "name": "teach",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "role"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
