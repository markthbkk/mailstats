const mongoose = require('mongoose');

const spamStatSchema = new mongoose.Schema(
  {
    documentID: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    sender: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    messageCount: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },

    date: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      maxLength: [10, "Use YYYY-MM-DD format only"],
      minLength: [10, "Use YYYY-MM-DD format only"],
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

const SpamStat = mongoose.model('SpamStat', spamStatSchema);

module.exports = SpamStat;
