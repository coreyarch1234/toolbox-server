var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ToolSchema = new Schema({
  createdAt            : { type: Date, default: Date() },
  updatedAt            : { type: Date, default: Date() },
  title                : { type: String, unique: false, required: true },
  description          : { type: String, unique: false, required: true },
});

module.exports = mongoose.model('Tool', ToolSchema);
