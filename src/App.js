import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './Utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainConatiner from './Components/MainConatiner';
import WatchPage from './Components/WatchPage';

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainConatiner/>
      },
      {
        path:'/watch',
        element:<WatchPage/>,
      },

    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
    <>
    <Head/>
    <RouterProvider router={appRouter}/>
    </>
    </Provider>
  );
}
export default App;
