import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Jobs from './routes/Jobs';
import Company from './routes/Company';
import Apply from './routes/Apply';

export const router = createBrowserRouter([
  { path:'/', element: <Home /> },
  { path:'/search/:profession/:location', element: <Jobs /> },
  { path:'/:company/details', element: <Company />},
  { path:'/apply/:id', element: <Apply /> }
])