const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Transaction.forge(null)
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      if (err) {
        return res.status(403);
      }
      res.status(500).send(err);
    });
};

module.exports.getAll = (req, res) => {
  models.Transaction.fetchAll()
    .then(transactions => {
      res.status(200).send(transactions);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};
