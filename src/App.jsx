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
import Blog, { blogLoader } from "./Views/Blog";
import Contact from "./Views/Contact";
import Error from "./Views/Error";
import BlogLayout from "./Layouts/BlogLayout";
import { DataProvider } from "./Layouts/GlobalContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route index errorElement={<Error />} element={<Home />} />
      <Route path="menu" errorElement={<Error />} element={<Menu />} />
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
    <DataProvider>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </DataProvider>
  );
}
export default App;
