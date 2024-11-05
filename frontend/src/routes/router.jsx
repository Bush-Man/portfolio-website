import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  AboutPage,
  BlogArticlePage,
  BlogPage,
  CreateBlogPage,
  HomePage,
  LoginPage,
  Navbar,
  TextEditor,
} from "../exports";
import RoutesConstants from "../constants/RouteConstants.js";
import BottomNavigationBar from "../components/BottomNavigationBar/BottomNavigationBar.jsx";

const Layout = ({ children }) => {
  const location = useLocation();
  return location.pathname === RoutesConstants.LOGIN_PATH ? (
    <LoginPage />
  ) : (
    <div>
      <Navbar />
      {children}
      <BottomNavigationBar />
    </div>
  );
};
const browserRouter = createBrowserRouter([
  {
    path: RoutesConstants.LOGIN_PATH,
    element: <LoginPage />,
    exact: true,
  },
  {
    path: RoutesConstants.HOME_PATH,
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    exact: true,
  },
  {
    path: RoutesConstants.ABOUT_PATH,
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
    exact: true,
  },
  {
    path: "*",
    element: <Layout>Not Found</Layout>,
  },
  {
    path: RoutesConstants.BLOG_PATH,
    element: (
      <Layout>
        <BlogPage />
      </Layout>
    ),
    exact: true,
  },
  {
    path: `${RoutesConstants.BLOG_PATH}/:id`,
    element: (
      <Layout>
        <BlogArticlePage />
      </Layout>
    ),
    exact: true,
  },
  {
    path: RoutesConstants.CREATE_BLOG,
    element: (
      <Layout>
        <TextEditor />
      </Layout>
    ),
    exact: true,
  },
]);
const AppRouter = () => {
  return <RouterProvider router={browserRouter} />;
};

export default AppRouter;
