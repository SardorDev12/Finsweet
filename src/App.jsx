import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import Home from "./Views/Home";
import Menu from "./Views/Menu";
import AboutUs from "./Views/AboutUs";
import OurStory from "./Views/OurStory";
import Blog from "./Views/Blog";
import Contact from "./Views/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="ourStory" element={<OurStory />} />
      <Route path="blog" element={<Blog />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
