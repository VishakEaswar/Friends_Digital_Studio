import React from 'react';
import { NavBar } from './components/NavBar';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import SignInPage from './pages/SignInPage';
import { Routes, Route } from 'react-router-dom';
import ContentPage from './pages/ContentPage';
import DashboardPage from './pages/DashboardPage';
import ProductLeads from './pages/ProductLeads';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signin" element={<SignInPage />} /> */}
        <Route path="/products" element={<ContentPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/productlead" element={<ProductLeads />} />
        <Route path="/aboutPage" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;


// import React from 'react';
// import { NavBar } from './components/NavBar';
// import HomePage from './pages/HomePage';
// // import LoginPage from './pages/LoginPage';
// // import SignInPage from './pages/SignInPage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ContentPage from './pages/ContentPage';
// import DashboardPage from './pages/DashboardPage';
// import ProductLeads from './pages/ProductLeads';
// import AboutPage from './pages/AboutPage';
// const App = () => {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />z
//         {/* <Route path="/signin" element={<SignInPage />} /> */}
//         <Route path="/products" element={<ContentPage />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path='/productlead' element={<ProductLeads/>}/>
//         <Route path='/aboutPage' element={<AboutPage/>}/>
//       </Routes>
//     </Router>
//   );
// };

// export default App;