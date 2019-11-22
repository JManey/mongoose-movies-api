var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let performerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  born: Date,
}, {
timestamps: true
});


module.exports = mongoose.model('Performer', performerSchema);