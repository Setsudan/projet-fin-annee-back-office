migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("d6rj2wd7e5atyn6");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "d6rj2wd7e5atyn6",
    "created": "2023-07-03 15:03:57.085Z",
    "updated": "2023-07-18 09:12:59.836Z",
    "name": "courses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1na79xbh",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "036msu55",
        "name": "date",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "0tcmg8pj",
        "name": "isPublic",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "74sj914x",
        "name": "status",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "uploaded",
            "edited",
            "transcripted",
            "ready"
          ]
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": "@request.auth.role = \"teach\" ||@request.auth.role = \"regisseur\"",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
