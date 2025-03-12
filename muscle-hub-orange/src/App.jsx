import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import ClassesPage from './pages/ClassesPage';
import TrainersPage from './pages/TrainersPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
