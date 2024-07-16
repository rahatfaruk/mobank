import Header from "./comps/Header";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (  
    <div>
      <Header />
      <Register />

      <ToastContainer theme="colored" position="top-center" />
    </div>
  );
}

export default App;