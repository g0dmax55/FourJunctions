const { fetchUserData } = require('./asyncHelper');

describe('fetchUserData', () => {
  test('returns mocked user data', async () => {
    const mockApi = jest.fn().mockResolvedValue({ id: 1, name: 'Alice' });
    const data = await fetchUserData(mockApi, 1);
    expect(data).toEqual({ id: 1, name: 'Alice' });
    expect(mockApi).toHaveBeenCalledWith(1);
  });

  test('throws error on bad input', async () => {
    await expect(fetchUserData(null, 1)).rejects.toThrow();
  });
});
