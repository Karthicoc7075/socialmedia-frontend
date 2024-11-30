import React, { useEffect } from 'react';
import './App.css';
import Router from './routes/router';
import Toast from './features/toast/components/Toast';
function App() { 

  

  

  return (  
    <div className="App">
      {/* <Auth/> */}


      <div className='blur' style={{ top: "10%", right: "10%" }} ></div>
      <div className='blur' style={{ top: "18%", left: "0%" }}></div>
      <div className='blur' style={{ bottom: "10%", right: "0" }} ></div>
      <div className='blur' style={{ bottom: "0%", left: "0" }} ></div>
      <Toast/>
      <Router/>
      
      
       
{/* <Routes>
          <Route path='/'  exact element={ <Auth />} />
          <Route path='/home' exact element={  <Home/>}/>
          <Route path='/chat' exact element={ <Chat />} />
          <Route path='/chat/:userId' exact element={ <Chat />} />
          <Route path='*' exact element={<Notfound />} />
          <Route path='/settings' element={ <Settings/>}/>
          <Route path='/profile' element={ <Profile/>}/>
          <Route path='/profile/:userId' element={ <Profile/>}/>
        </Routes> */}
    </div>


  );
}

export default App;