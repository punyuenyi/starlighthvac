// // const context = require.context('./image', true, /.jpeg$/);

// const images = {};
// context.keys().forEach((key) => {
//   const countryCode = key.split('./').pop() // remove the first 2 characters
//     .substring(0, key.length - 6); // remove the file extension
//   images[countryCode] = context(key);
// });

// export default images;