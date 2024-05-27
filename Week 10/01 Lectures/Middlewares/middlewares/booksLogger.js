export const booksLogger = (req, res, next) => {
  console.log(
    `Books route accessed with a method: ${req.method} and path: ${req.path}`
  );
  next();
};
