const admin = require("./firebase-config");
function authMiddleware(request, response, next) {
  if (!["/api/sms"].includes(request.url)) {
    return next();
  }

  const headerToken = request.headers.authorization;
  if (!headerToken) {
    return response.status(401).send({ message: "No token provided" });
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    return response.status(401).send({ message: "Invalid token" });
  }

  const token = headerToken.split(" ")[1];
  admin
    .auth()
    .verifyIdToken(token)
    .then(() => next())
    .catch(() => response.status(401).send({ message: "Could not authorize" }));
}
module.exports = authMiddleware;
