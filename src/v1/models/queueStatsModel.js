const mongoose = require('mongoose');

const queueStatSchema = new mongoose.Schema(
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
    queueName: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    messageCount: {
      type: Number,
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

const QueueStat = mongoose.model('QueueStat', queueStatSchema);

module.exports = QueueStat;
