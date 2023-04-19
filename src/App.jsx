import './App.css'
import SearchParams from "./components/SearchParams.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Details from "./components/Details.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <SearchParams />
    },
    {
        path: "/pets/:petId",
        element: <Details />
    }
]);

function App() {

    return (
        <div className="App">
            <header>
                Adopt Pet!
            </header>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
