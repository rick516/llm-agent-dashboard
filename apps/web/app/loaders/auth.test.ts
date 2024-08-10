import { test, expect } from 'vitest'
import { authenticateUser } from './auth'

test('authenticates a user with valid credentials', async () => {
  const result = await authenticateUser('validUser', 'validPassword')
  expect(result).toBeTruthy()
})

test('does not authenticate a user with invalid credentials', async () => {
  const result = await authenticateUser('invalidUser', 'invalidPassword')
  expect(result).toBeFalsy()
})

test('throws an error for missing credentials', async () => {
  await expect(authenticateUser('', '')).rejects.toThrow('Credentials are required')
})


