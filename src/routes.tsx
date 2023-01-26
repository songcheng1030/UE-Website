import { Redirect } from 'react-router-dom';
import FaqPage from './pages/FaqPage';
import HomePage from './pages/HomePage';
import RoadMapPage from './pages/RoadMapPage';
import MainPage from './pages/MainPage';
import MintPage from './pages/MintPage'
import StakePage from './pages/StakePage'
import ServiceTermsPage from './pages/ServiceTermsPage'
import LitePaperPage from './pages/LitePaperPage'
import GalleryPage from './pages/GalleryPage'
export const routes = {
  minimal: [
    {
      path: "/",
      component: HomePage,
      exact: true
    },
    // {
    //   path: "/home",
    //   component: HomePage,
    //   exact: true
    // },
    {
      path: "/faq",
      component: FaqPage,
      exact: true
    },
    {
      path: "/roadmap",
      component: RoadMapPage,
      exact: true
    },
    {
      path: "/buy",
      component: MintPage,
      exact: true
    },
    {
      path: "/stake",
      component: StakePage,
      exact: true
    },
    {
      path: "/service_terms",
      component: ServiceTermsPage,
      exact: true
    },
    {
      path: "/litepaper",
      component: LitePaperPage,
      exact: true
    },
    {
      path: "/gallery",
      component: GalleryPage,
      exact: true
    },
    {
      path: "**",
      exact: true,
      component: () => <Redirect to="/" />,
    },
  ],
};
