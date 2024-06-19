import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './features/auth/components';
import DashboardPage from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute component={DashboardPage} />} />
    </Routes>
  );
};

export default App;
