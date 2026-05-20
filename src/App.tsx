// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Onboarding from './pages/Onboarding/Onboarding';
import Alphabet from './pages/Alphabet/Alphabet';
import Words from './pages/Words/Words';
import Sentences from './pages/Sentences/Sentences';
import Articles from './pages/Articles/Articles';
import Profile from './pages/Profile/Profile';

function App() {
  // 临时：是否完成首次引导（后续会接入状态管理）
  const hasCompletedOnboarding = true; // 先设为 true，跳过引导页

  if (!hasCompletedOnboarding) {
    return <Onboarding />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Alphabet />} />
          <Route path="alphabet" element={<Alphabet />} />
          <Route path="words" element={<Words />} />
          <Route path="sentences" element={<Sentences />} />
          <Route path="articles" element={<Articles />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;