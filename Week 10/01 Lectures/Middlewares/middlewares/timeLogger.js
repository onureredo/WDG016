export const timeLogger = (req, res, next) => {
  const date = new Date();
  console.log(`${req.method} ${date.toLocaleTimeString()}`);
  // const error = new Error('Simulated Error');
  // next(error);
  next();
};
