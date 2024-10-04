import React from 'react';
import './assets/style.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { JobsContextProvider } from './context/jobsContext';


function App() {
  return (
    <JobsContextProvider>
      <div>
        <RouterProvider router={router}/>
      </div>
    </JobsContextProvider>
    
  )
}

export default App;
