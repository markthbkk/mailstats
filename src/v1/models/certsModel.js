const mongoose = require('mongoose');

const certsSchema = new mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: [4, 'Title must be at least 5 characters'],
    },
    subscriptionStartDate: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      maxLength: [10, 'Use YYYY-MM-DD format only'],
      minLength: [10, 'Use YYYY-MM-DD format only'],
    },
    subscriptionEndDate: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      maxLength: [10, 'Use YYYY-MM-DD format only'],
      minLength: [10, 'Use YYYY-MM-DD format only'],
    },
    certificateExpiryDate: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      maxLength: [10, 'Use YYYY-MM-DD format only'],
      minLength: [10, 'Use YYYY-MM-DD format only'],
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

const Cert = mongoose.model('Cert', certsSchema);

module.exports = Cert;
