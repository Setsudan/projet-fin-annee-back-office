migrate((db) => {
  const collection = new Collection({
    "id": "npygrg6l254z6kg",
    "created": "2023-07-18 09:17:47.509Z",
    "updated": "2023-07-18 09:17:47.509Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zz89gynq",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zfcthtjt",
        "name": "description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "d7lxeaad",
        "name": "global_status",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "uploaded",
            "edited",
            "transcripted",
            "translated audio",
            "translated text",
            "visuals added",
            "marketing done",
            "quality checked",
            "quality rejected",
            "ready",
            "published"
          ]
        }
      },
      {
        "system": false,
        "id": "6vauztli",
        "name": "scope_status",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "not started",
            "in progress",
            "done",
            "rejected"
          ]
        }
      },
      {
        "system": false,
        "id": "eyq9tdtm",
        "name": "project_link",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tw0ajjyj",
        "name": "project_files",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "nxs4fpjo",
        "name": "tags",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "music",
            "courses",
            "concert"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("npygrg6l254z6kg");

  return dao.deleteCollection(collection);
})
