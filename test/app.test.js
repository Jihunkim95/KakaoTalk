// test/app.test.js

const request = require('supertest');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API' });
});

describe('GET /', () => {
  it('responds with Hello, world!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});

describe('GET /api', () => {
  it('responds with JSON', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello from API');
  });
});
