import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigations from './Routes/Navigations';
import { ToastContainer } from 'react-toastify';
import { PageNameContext, selectContext } from './context/context';

function App() {
  const [page, setPage] = useState('Bank Transfer')
  const [select, setSelect] = useState(false)

  return (
    <div className="App">
      <PageNameContext.Provider value={[page, setPage]}>
        <selectContext.Provider value={[select, setSelect]}>
          <BrowserRouter>
            <ToastContainer />
            <Navigations />
          </BrowserRouter>
        </selectContext.Provider>
      </PageNameContext.Provider>
    </div>
  );
}

export default App;
