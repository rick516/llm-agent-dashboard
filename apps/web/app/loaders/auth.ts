// TODO: サンプルなので後で削除
export const authenticateUser = async (username: string, password: string): Promise<boolean> => {
  if (!username || !password) {
    throw new Error('Credentials are required')
  }
  
  const validUser = { username: 'validUser', password: 'validPassword' }
  
  if (username === validUser.username && password === validUser.password) {
    return true 
  }
  
  return false
}
