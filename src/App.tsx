import { RouterProvider } from 'react-router-dom'
import routerComponent from "./routers/MainRouter";



function App() {
  return (
    <>
      <RouterProvider router={routerComponent} />
    </>
  );
}

export default App