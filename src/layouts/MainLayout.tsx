// src/layouts/MainLayout.tsx
import { Outlet, NavLink } from 'react-router-dom';

function MainLayout() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 页面内容区域 */}
      <div style={{ flex: 1, paddingBottom: '70px' }}>
        <Outlet />
      </div>

      {/* 底部导航栏 */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderTop: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        zIndex: 100
      }}>
        <NavLink to="/alphabet" style={({ isActive }) => ({ color: isActive ? '#4A90E2' : '#999', textDecoration: 'none' })}>
          字母
        </NavLink>
        <NavLink to="/words" style={({ isActive }) => ({ color: isActive ? '#4A90E2' : '#999', textDecoration: 'none' })}>
          单词
        </NavLink>
        <NavLink to="/sentences" style={({ isActive }) => ({ color: isActive ? '#4A90E2' : '#999', textDecoration: 'none' })}>
          句子
        </NavLink>
        <NavLink to="/articles" style={({ isActive }) => ({ color: isActive ? '#4A90E2' : '#999', textDecoration: 'none' })}>
          范文
        </NavLink>
        <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? '#4A90E2' : '#999', textDecoration: 'none' })}>
          我的
        </NavLink>
      </nav>
    </div>
  );
}

export default MainLayout;