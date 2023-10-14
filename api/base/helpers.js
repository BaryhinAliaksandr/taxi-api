export const handleServerError = async (response, callback) => {
  try {
    return await callback();
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};
