import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import type { JSX } from "react";
import './App.scss';

function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
