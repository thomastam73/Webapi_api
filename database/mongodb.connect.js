const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.connect(
  "mongodb+srv://admin:QARHypBmY0Ldu4fD@deafanddumbpeopleapptes.nksos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

module.exports = mongoose;
