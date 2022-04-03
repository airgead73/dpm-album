/* GENERAL ENVIRONMENT */
const isDev = process.env.NODE_ENV === 'development';

/* TEST */
const testLocal = process.env.TEST_LOCAL || '';
const testProduction = process.env.TEST_PR || '';

/* AUTH */
// const authSecret = process.env.AUTH_SECRET;
// const baseUrl = process.env.BASE_URL;
// const clientId = process.env.CLIENT_ID;
// const issuerBaseUrl = process.env.ISSUER_BASE_URL;

/* DB */
//const mongoUri = process.env.MONGO_URI;

/* SESSION */
// const rateLimit = process.env.RATE_LIMIT;
// const sessionSecret = process.env.SESSION_SECRET;
// const sessionExp = process.env.SESSION_EXP;

/* check variables */
// if (!authSecret) {
//   throw new Error(
//     ".env is missing the definition of an AUTH_SECRET environmental variable",
//   );
// }

// if (!baseUrl) {
//   throw new Error(
//     ".env is missing the definition of a BASE_URL environmental variable",
//   );
// }

// if (!clientId) {
//   throw new Error(
//     ".env is missing the definition of a CLIENT_ID environmental variable",
//   );
// }

// if (!issuerBaseUrl) {
//   throw new Error(
//     ".env is missing the definition of an ISSUER_BASE_URL environmental variable",
//   );
// }

// if (!mongoUri) {
//   throw new Error(
//     ".env is missing the definition of a MONGO_URI environmental variable",
//   );
// }

// if (!rateLimit) {
//   throw new Error(
//     ".env is missing the definition of a RATE_LIMIT environmental variable",
//   );
// }

// if (!sessionExp) {
//   throw new Error(
//     ".env is missing the definition of a SESSION_EXP environmental variable",
//   );
// }

// if (!sessionSecret) {
//   throw new Error(
//     ".env is missing the definition of a SESSION_SECRET environmental variable",
//   );
// }

if (!testLocal) {
  throw new Error(
    ".env is missing the definition of a TEST_LOCAL environmental variable",
  );
}

if (!testProduction) {
  throw new Error(
    ".env is missing the definition of a TEST_PR environmental variable",
  );
}


module.exports = {
  isDev,
  testLocal,
  testProduction
  // authSecret,
  // baseUrl,
  // clientId,
  // issuerBaseUrl,
  // mongoUri,
  // rateLimit,
  // sessionExp,
  // sessionSecret
}