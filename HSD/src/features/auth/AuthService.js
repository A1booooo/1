export const login = async (credentials) => {
  // 模拟登录API
  return { 
    user: { 
      id: '1', 
      name: credentials.username,
      role: 'developer' 
    },
    token: 'mock-token'
  };
};

export const logout = () => {
  // 清除认证信息
  return { success: true };
};

export const getCurrentUser = () => {
  // 从localStorage获取用户信息
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};