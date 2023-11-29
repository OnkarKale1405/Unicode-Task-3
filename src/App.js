import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// Layout
import RootLayout from "./Layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route index path="/Unicode-Task-3" element={<Home />} />
      <Route path="/Unicode-Task-3/login" element={<Login />} />
      <Route path="/Unicode-Task-3/register" element={<Register />} />
      <Route path="/Unicode-Task-3/home" element={<Home />} />
    </>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
