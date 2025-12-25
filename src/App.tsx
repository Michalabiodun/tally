import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import FleetManagement from './pages/FleetManagement';
import JobsManagement from './pages/JobsManagement';
import DispatchManagement from './pages/DispatchManagement';
import InvoicesPage from './pages/InvoicesPage';
import TicketsPage from './pages/TicketsPage';
import UsersPage from './pages/UsersPage';
import DriversHubPage from './pages/DriversHubPage';
import ClientsPage from './pages/ClientsPage';
import MaterialsPage from './pages/MaterialsPage';
import RequestsPage from './pages/RequestsPage';
import SubContractorsPage from './pages/SubContractorsPage';
import ManagersPage from './pages/ManagersPage';
import QuarryPage from './pages/QuarryPage';
import SettingsPage from './pages/SettingsPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';

// Dashboard Layout Wrapper
const DashboardLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fleet-management" element={<FleetManagement />} />
          <Route path="/jobs" element={<JobsManagement />} />
          <Route path="/dispatch" element={<DispatchManagement />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/driver-hub" element={<DriversHubPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/requests" element={<RequestsPage />} />
          <Route path="/sub-contractors" element={<SubContractorsPage />} />
          <Route path="/managers" element={<ManagersPage />} />
          <Route path="/quarry" element={<QuarryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
