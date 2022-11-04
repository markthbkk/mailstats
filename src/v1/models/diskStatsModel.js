const mongoose = require('mongoose');

const diskStatSchema = new mongoose.Schema(
  {
    documentID: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    serverName: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    volumes: {
      type: Array,
      required: false,
      unique: false,
      trim: true,
    },

    created: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const DiskStat = mongoose.model('DiskStat', diskStatSchema);

module.exports = DiskStat;
