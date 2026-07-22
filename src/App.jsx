import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import BeneficiosConvenios from './pages/BeneficiosConvenios';
import CCT from './pages/CCT';
import Circulares from './pages/Circulares';
import GuiaNR01 from './pages/GuiaNR01';
import TurismoEmNumeros from './pages/TurismoEmNumeros';
import AssocieSe from './pages/AssocieSe';
import Contato from './pages/Contato';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/beneficios" element={<BeneficiosConvenios />} />
        <Route path="/convenios" element={<BeneficiosConvenios />} />
        <Route path="/cct" element={<CCT />} />
        <Route path="/circulares" element={<Circulares />} />
        <Route path="/guia-nr01" element={<GuiaNR01 />} />
        <Route path="/turismo-em-numeros" element={<TurismoEmNumeros />} />
        <Route path="/associe-se" element={<AssocieSe />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
