import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CommonLayout from "./CommonLayout";
import NotFoundPage from "./NotFoundPage";
import Landing from "./components/landing/Landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<CommonLayout />}>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
