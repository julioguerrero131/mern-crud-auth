export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    // res.status(400).json({ 
    //   error: error.issues.map((issue) => issue.message) 
    // });
    res.status(400).json(error.issues);
  }
} 