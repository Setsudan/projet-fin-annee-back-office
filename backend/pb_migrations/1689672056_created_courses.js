migrate((db) => {
  const collection = new Collection({
    "id": "8gzf0s3vd23bhbs",
    "created": "2023-07-18 09:20:56.130Z",
    "updated": "2023-07-18 09:20:56.130Z",
    "name": "courses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1yyvqzoi",
        "name": "related_project",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "npygrg6l254z6kg",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ekyjhaou",
        "name": "teachers",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": [
            "role",
            "first_name",
            "last_name"
          ]
        }
      },
      {
        "system": false,
        "id": "rkpizomp",
        "name": "participants",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": [
            "role",
            "first_name",
            "last_name"
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
  const collection = dao.findCollectionByNameOrId("8gzf0s3vd23bhbs");

  return dao.deleteCollection(collection);
})
