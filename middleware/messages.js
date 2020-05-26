const messageDictionary = {
  // Schema Validation Errors
  notAcceptableValue: {
    message: "The passed parameter value is not acceptable",
    code: 400,
  },
  invalidId: {
    message: "ID parameter is not valid",
    code: 400,
  },
  incompleteData: {
    message: "Please provide the required data",
    code: 400,
  },
  // No Result Errors
  userIdNotFound: {
    message: "User with this ID not found",
    code: 404,
  },
  itemNotFound: {
    message: "Object not found",
    code: 404,
  },
  // Database Errors
  dbCreateError: {
    message: "There was an error while trying to Save to DB",
    code: 500,
  },
  dbRetrieveError: {
    message: "There was an error while trying to Retrieve record from DB",
    code: 500,
  },
  dbUpdateError: {
    message: "There was an error while trying to Update record in DB",
    code: 500,
  },
  dbDeleteError: {
    message: "There was an error while trying to Delete record from DB",
    code: 500,
  },
  // Authentication Errors
  invalidToken: {
    message: "Invalid token",
    code: 401,
  },
  notAuthenticated: {
    message: "You must first authenticate yourself",
    code: 401,
  },
  // "Not Implemented" Errors
  notImplemented: {
    message: "Not yet implemented",
    code: 501,
  },
}

function errorHandler(err, req, res, next) {
  // do some loging: error + request

  // ensure error has values;
  const error = {error: err, method: req.method, url: req.url, params: req.params, query: req.query}

  res.status(err.code || 500).json(error);
  next();
}

module.exports = {
  errorHandler,
  messageDictionary
}
