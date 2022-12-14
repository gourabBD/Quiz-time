import logo from './logo.svg';
import './App.css';
import {

  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { route, router } from './Routes/routes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App ">
    <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
