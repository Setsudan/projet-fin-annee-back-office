migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "onl9ikye",
    "name": "role",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "regisseur",
        "recorder",
        "editor",
        "transcriptor",
        "audio_translator",
        "text_translator",
        "graphist",
        "marketing_team",
        "quality_inspector",
        "teach",
        "student"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "onl9ikye",
    "name": "role",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "teach",
        "student",
        "editor",
        "transcriptor",
        "recorder",
        "admin"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
