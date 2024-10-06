const API_URL = 'http://localhost:5000/api'; // Замените на ваш URL API

export async function fetchMessages() {
  const response = await fetch(`${API_URL}/messages`);
  if (!response.ok) {
    throw new Error('Failed to fetch messages');
  }
  return response.json();
}

export async function saveMessage(messageData) {
  const response = await fetch(`${API_URL}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageData),
  });
  if (!response.ok) {
    throw new Error('Failed to save message');
  }
  return response.json();
}