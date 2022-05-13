import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Login } from './pages'
import { SharedLayout, Movies, Subscription, Users } from './pages/dashboard';
import { ProtectedRoute } from './routes';
import { Toaster } from "react-hot-toast";
import UpdateMovie from "./components/UpdateMovie";
import { useSelector } from "react-redux";

function App() {
  const { openModalPopup, movieModalData } = useSelector((store) => store.movie);
  return (
    <BrowserRouter>
      {openModalPopup && <UpdateMovie movieData={movieModalData} />}
      <Routes>
        <Route path='dashboard' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>}>
          <Route index element={<Movies />} />
          <Route path="subscription_plan" element={<Subscription />} />
          <Route path="users_list" element={<Users />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={true} />
    </BrowserRouter>
  );
}

export default App;
