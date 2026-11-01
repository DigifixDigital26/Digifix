const errorHandler = (err, req, res, _next) => {
  let status = err.status || err.statusCode || 500;
  let message = err.message || 'Something went wrong.';

  if (err.type === 'entity.parse.failed') {
    status = 400;
    message = 'Request body is not valid JSON.';
  } else if (err.type === 'entity.too.large') {
    status = 413;
    message = 'Request body is too large.';
  } else if (err.name === 'ValidationError') {
    status = 400;
    message = Object.values(err.errors).map((e) => e.message).join(', ');
  } else if (err.name === 'CastError') {
    status = 400;
    message = 'Invalid identifier.';
  } else if (/MongoNetworkError|MongooseServerSelectionError|MongoServerSelectionError|buffering timed out/i.test(`${err.name} ${err.message}`)) {
    status = 503;
    message = 'The service is temporarily unavailable. Please try again shortly.';
  }

  if (status >= 500) console.error(err);
  if (status === 500 && process.env.NODE_ENV === 'production') message = 'Something went wrong on our side.';

  res.status(status).json({ success: false, message });
};

export default errorHandler;
