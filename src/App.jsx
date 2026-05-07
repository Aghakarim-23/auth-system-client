import { Routes, Route } from "react-router-dom";
import Home from "./features/pages/Home";
import About from "./features/pages/About";
import Contact from "./features/pages/Contact";
import Navbar from "./components/Navbar";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import NotFound from "./features/pages/NotFound";
import GuestRoute from "./routes/GuestRote";
import PrivateRoute from "./routes/PrivateRoute";
import User from "./features/user/User"
import Settings from "./features/user/Settings";
import MyPosts from "./features/posts/MyPosts";
import PostDetail from "./features/posts/PostDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<GuestRoute />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="/register" element={<GuestRoute />}>
          <Route index element={<RegisterPage />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute />}>
          <Route index element={<User />} />
        </Route>
        <Route path="/settings" element={<PrivateRoute />}>
          <Route index element={<Settings />} />
        </Route>
        <Route path="/my-posts" element={<PrivateRoute />}>
          <Route index element={<MyPosts />} />
          <Route path=":id" element={<PostDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
