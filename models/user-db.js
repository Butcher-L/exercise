import { Schema } from 'mongoose';
import { model } from 'mongoose';

import mongooseUtil from '../middlewares/mongoose.js';

const { toJSON } = mongooseUtil;

const schema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
        type: String,
        required: true,
      },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateTimeCreated: {
      type: Date,
      required: true,
    },
    dateTimeUpdated: {
      type: Date,
      required: true,
    },

  },
  { toJSON, _id: false },
);

schema.index({ _id: 1 });
schema.index({ firstname: 1, lastname: 1 });


export default model('users', schema);

