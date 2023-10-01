import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import Home, { loadMenuDataHome } from "./Views/Home";
import Menu, { menuLoader } from "./Views/Menu";
import AboutUs from "./Views/AboutUs";
import OurStory from "./Views/OurStory";
import Blog, { blogLoader } from "./Views/Blog";
import Contact from "./Views/Contact";
import Error from "./Views/Error";
import MenuLayout from "./Layouts/MenuLayout";
import BlogLayout from "./Layouts/BlogLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route
        index
        loader={loadMenuDataHome}
        errorElement={<Error />}
        element={<Home />}
      />
      <Route path="menu" element={<MenuLayout />}>
        <Route
          index
          loader={menuLoader}
          errorElement={<Error />}
          element={<Menu />}
        />
      </Route>
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="ourStory" element={<OurStory />} />
      <Route path="blog" element={<BlogLayout />}>
        <Route
          index
          element={<Blog />}
          loader={blogLoader}
          errorElement={<Error />}
        />
      </Route>
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
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
