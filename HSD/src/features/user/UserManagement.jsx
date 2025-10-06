import { useAuth } from '../auth/AuthProvider';

export default function UserManagement() {
  const { user } = useAuth();
  
  return (
    <div>
      <h2>用户管理</h2>
      {/* 用户列表和操作 */}
    </div>
  );
}