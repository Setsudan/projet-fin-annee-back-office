migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6rj2wd7e5atyn6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hgchjrhg",
    "name": "video",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "video/ogg",
        "video/mpeg",
        "video/quicktime",
        "video/quicktime",
        "video/mp4",
        "video/webm",
        "video/3gpp",
        "video/3gpp2",
        "video/x-msvideo",
        "video/x-flv",
        "video/x-matroska",
        "video/x-m4v",
        "video/x-ms-asf"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6rj2wd7e5atyn6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hgchjrhg",
    "name": "video",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
