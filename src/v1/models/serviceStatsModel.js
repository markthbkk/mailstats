const mongoose = require('mongoose');

const serviceStatSchema = new mongoose.Schema(
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
    serviceName: {
      type: String,
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

const ServiceStat = mongoose.model('ServiceStat', serviceStatSchema);

module.exports = ServiceStat;
