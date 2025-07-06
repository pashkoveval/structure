import { http, HttpResponse } from 'msw';

export const handlers = [
  // Мокаем GET /api/users
  http.get('/api/users', () => {
    return HttpResponse.json(
      [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
      { headers: { 'Content-Type': 'application/json' } },
    );
  }),

  // Мокаем POST /api/login
  http.post('http://localhost:5173/api/login', async ({ request }) => {
    const { username } = (await request.json()) as { username: string };
    return HttpResponse.json({ token: 'fake-token', username });
  }),
];
