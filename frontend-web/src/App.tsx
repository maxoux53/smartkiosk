import { RouterProvider, useNavigate } from "react-router-dom";
import router from "./routes/router";
import type { JSX } from "react";
import "./App.scss";
import { ModalProvider } from "./contexts/ModalContext";

function App(): JSX.Element {
    return (
        <ModalProvider>
            <RouterProvider router={router} />
        </ModalProvider>
    );
}

export default App;
