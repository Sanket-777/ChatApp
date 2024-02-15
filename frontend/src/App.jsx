import ChatScreen from './Pages/ChatScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Pages/Welcome';


function App() {


  return (
    <div className='bg-slate-50 flex h-screen justify-center items-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/" element={<Welcome />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;