const express = require('express');
const { ObjectId } = require('mongodb');

const createRouter = function (collection) {

    const router = express.Router();

    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .findOne({ _id: ObjectID(id) })
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.post('/', (req, res) => {
        const newData = req.body
        collection.insertOne(newData)
            .then(result => res.json({ ...newData, _id: result.insertedId }))
            .catch(err => {
                console.error(err);
                res.status(500).send('Error occurred during the insertion');
            })
    })

    router.delete('/:id', (req, res) => {
        const id = req.params.id
        collection.deleteOne({ _id: new ObjectId(id) })
            .then(result => res.json(result))
            .catch(err => {
                console.error(err);
                res.status(500).send('Error occurred during the deletion');
            });

    })

    return router;
};

module.exports = createRouter;