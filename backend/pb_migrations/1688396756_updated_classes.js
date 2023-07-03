migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11s1x3qm2p4xm11")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nh4j1nij",
    "name": "participants",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "htp1xke5",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hwv4arct",
    "name": "description",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11s1x3qm2p4xm11")

  // remove
  collection.schema.removeField("nh4j1nij")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "htp1xke5",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hwv4arct",
    "name": "description",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
