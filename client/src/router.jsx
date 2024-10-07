import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Jobs from './routes/Jobs';
import Company from './routes/Company';
import Apply from './routes/Apply';
import NewJob from './routes/NewJob';
import NewJobStart from './routes/NewJobStart';
import NewCompany from './routes/NewCompany';

export const router = createBrowserRouter([
  { path:'/', element: <Home /> },
  { path:'/search/:profession/:location', element: <Jobs /> },
  { path:'/:company/details', element: <Company />},
  { path:'/apply/:id', element: <Apply /> },
  { path:'/new/job', element: <NewJob /> },
  { path:'/new/job/start', element: <NewJobStart /> },
  { path:'/new/company', element: <NewCompany /> }
])