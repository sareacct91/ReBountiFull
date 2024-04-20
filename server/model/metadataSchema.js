const { Schema } = require("mongoose");

const metadataSchema = new Schema(
  {
    inventory: Number,
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports = metadataSchema;
