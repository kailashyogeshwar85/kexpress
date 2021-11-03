const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClusterSchema = new Schema({
  streams: [
    {
      type: String,
      name: String,
      topic: String,
      keyFormat: String,
      valueFormat: String,
      isWindowed: Boolean,
    }
  ],
  topics: [
    {
      name: String,
      replicaInfo: []
    }
  ],
  tables: [
    {
      type: String,
      name: String,
      topic: String,
      keyFormat: String,
      valueFormat: String,
      isWindowed: false
    }
  ]
});

module.export = mongoose.model('Cluster', ClusterSchema);