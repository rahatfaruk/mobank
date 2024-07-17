import Header from "./comps/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (  
    <div>
      <Header />
      {/* <Register /> */}
      <Login />

      <ToastContainer theme="colored" position="top-center" />
    </div>
  );
}

export default App;