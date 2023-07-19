migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("11s1x3qm2p4xm11");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "11s1x3qm2p4xm11",
    "created": "2023-07-03 15:04:48.199Z",
    "updated": "2023-07-05 07:04:58.248Z",
    "name": "classes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
            "first_name",
            "last_name",
            "role"
          ]
        }
      },
      {
        "system": false,
        "id": "hwv4arct",
        "name": "description",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
