"use strict";
// import mongoose from 'mongoose';
// import 'dotenv/config';
// let connectionString: any;
// switch (process.env.NODE_ENV) {
//   case 'development':
//     connectionString = process.env.DEV_DB_URI;
//     console.log(process.env.NODE_ENV);
//     break;
//   case 'production':
//     console.log(process.env.NODE_ENV);
//     connectionString = process.env.PROD_DB_URI;
//     break;
//   default:
//     throw new Error('no connection!');
//     break;
// }
// //connect to MongoDB
// export const connection = mongoose
//   .connect(`${connectionString}`, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log(`connected to ${connectionString}`))
//   .catch(error => console.log(error.message));
//# sourceMappingURL=connection.js.map