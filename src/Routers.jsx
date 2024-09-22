// yang di komentari Opsi kedua untuk membuat routing dengan menggunakan createBrowserRouter dari react-router-dom
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";

import Nav from "./components/Nav.jsx";
import Todo from "./components/Todo.jsx";
import ColorGenerator from "./components/ColorGenerator.jsx";

import ErrorPage from "./components/ErrorPage.jsx";

// function RouterPage() {
//   return (
//     <Router>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Todo />} />
//       </Routes>
//       <Routes>
//         <Route path="/color-generator" element={<ColorGenerator />} />
//       </Routes>
//     </Router>
//   );
// }

// export default RouterPage;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Todo />,
      },
      {
        path: "color-generator",
        element: <ColorGenerator />,
      },
    ],
  },
]);
