async function fetchUserData(apiCall, userId) {
  if (!userId || typeof apiCall !== 'function') {
    throw new Error('Invalid input');
  }
  const response = await apiCall(userId);
  return response;
}

module.exports = { fetchUserData };
