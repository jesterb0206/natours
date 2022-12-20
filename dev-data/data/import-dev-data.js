const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: `${__dirname}/../../config.env` });

const importData = async () => {
  try {
    const tours = JSON.parse(
      fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
    );
    await Tour.create(tours);
    // eslint-disable-next-line no-console
    console.log('Data successfully loaded!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    // eslint-disable-next-line no-console
    console.log('Data successfully deleted!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

(async () => {
  if (process.argv[2]) {
    const DB = process.env.DATABASE.replace(
      '<PASSWORD>',
      process.env.DATABASE_PASSWORD
    );
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    // eslint-disable-next-line no-console
    console.log('DB connection successful!');

    if (process.argv[2] === '--import') {
      await importData();
    } else if (process.argv[2] === '--delete') {
      await deleteData();
    }
    await mongoose.disconnect();
    // eslint-disable-next-line no-console
    console.log('Mongoose connection closed!');
  }
})();
