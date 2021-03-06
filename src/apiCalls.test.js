import { postMessage } from './apiCalls';

describe('POST', () => {
  const mockEmail = 'test@test.test';
  const mockDesc = 'test desc';
  const mockPayload = {
    method: 'POST',
    body: JSON.stringify({email: mockEmail, body: mockDesc}),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const mockResponse = {
    id: 1
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockResponse);
        }
      });
    });
  });

  it('should be passed the correct URL', () => {
    postMessage(mockEmail, mockDesc);
    expect(window.fetch).toHaveBeenCalledWith('https://marcaephoto.herokuapp.com/api/v1/messages', mockPayload)
  });

  it('should return a single project object', () => {
      expect(postMessage(mockEmail, mockDesc)).resolves.toEqual(mockResponse);
  });

  it('should return an error for a response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(postMessage(mockEmail, mockDesc)).rejects.toEqual(Error(
      'There was a problem sending your message.'));
    });
});
