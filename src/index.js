// -------------------------
// Vanilla React
import React from 'react';
import ReactDOM from 'react-dom/client';
// -------------------------
// Added functionality
// ------------
// to route
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// ------------
// to use redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
// -------------------------
// Major components
import PageLayout from './components/layout/PageLayout';
import Home from './components/links/Home';
import Friends from './components/links/Friends';
import GivingProfile from './components/links/GivingProfile';
// -------------------------
// Styling
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer)

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Router>
        <PageLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/giving' element={<GivingProfile />} />
          </Routes>
        </PageLayout>
      </Router>
    </Provider>
  // </React.StrictMode>
);