const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
const HTTP_MESSAGES = {
  METHOD_NOT_ALLOWED: "Method not allowed",
  NO_ELEMENT: "No Element",
  BAD_REQUEST: "Bad Request",
};
module.exports = HTTP_STATUS_CODES;
module.exports = HTTP_METHODS;
module.exports = HTTP_MESSAGES;
