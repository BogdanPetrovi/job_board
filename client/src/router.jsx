import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Jobs from './routes/Jobs';
import Company from './routes/Company';

export const router = createBrowserRouter([
  { path:'/', element: <Home /> },
  { path:'/search', element: <Jobs /> },
  { path:'/company/details', element: <Company />}  
])