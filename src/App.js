import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from './common/index'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Context from './context';
import { setUserDetails } from './Store/userSlice';




function App() {
  const dispatch=useDispatch()
  const fetchUsersDetails=async()=>{
    const dataResponse=await fetch(SummaryApi.UserDetails.url,
      {
        method:SummaryApi.UserDetails.method,
        credentials: 'include'
      }
    )
    const dataAPI= await dataResponse.json()

    if(dataAPI.success){
      dispatch(setUserDetails(dataAPI.data))

    }


    console.log("user Details",dataResponse)


  }
  useEffect(() => {
    fetchUsersDetails();
  }, []);
  return (
  <>
<Context.Provider value={{
  fetchUsersDetails
}}>
  
  <ToastContainer />

  <Header/>
  <main className='min-h-[calc(100vh-120px)]'>
      <Outlet/>

  </main>
  <Footer/>
  </Context.Provider>
  </>
  );
}

export default App;
