export const postMessage = async (email, message) => {
  const url = 'https://marcaephoto.herokuapp.com/api/v1/messages';
  const payload = {
    method: 'POST',
    body: JSON.stringify({email, body: message}),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, payload);
  if(!response.ok) {
    throw new Error('There was a problem sending your message.');
  }
  const id = await response.json();
  return id
};
