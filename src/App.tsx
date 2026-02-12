import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CompanyPage } from './pages/CompanyPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PartnerPage } from './pages/PartnerPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { RecruitMangaPage } from './pages/RecruitMangaPage';
import { RecruitPage } from './pages/RecruitPage';
import { StaffPage } from './pages/StaffPage';
import { WorksPage } from './pages/WorksPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/recruit/manga" element={<RecruitMangaPage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
