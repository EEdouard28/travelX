const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://admin-evince:Test123@travelxcluster.3wurhfq.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// connect(connectionString, {
//   useNewUrlParser: true,
//   userUnifiedTopology: true,
// })

module.exports = mongoose.connection;
