import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import CommonLayout from "./CommonLayout";
import NotFoundPage from "./NotFoundPage";
import LandingPage from "./components/landing/LandingPage";
import ScrollToTop from "./scrollToTop";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandlordDashboard from "./components/landlord/LandlordDashboard";
import Toast from "./components/toast/Toast";
import Loader from "./components/Loader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Define your routes
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/LandlordDashboard" element={<LandlordDashboard />} />
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   )
// );

function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <ScrollToTop /> {/* Make sure to include ScrollToTop */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/LandlordDashboard" element={<LandlordDashboard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Toast />
        <Loader />
      </div>
    </div>
  );
}

export default App;
