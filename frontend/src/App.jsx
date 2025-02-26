import { useState } from 'react'
import './styles/main.scss';
import MainMap from './components/MainMap';
import LandingPage from './components/LandingPage';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
        try {
            const response = await axios.get(CHECK_LOGIN_ENDPOINT_URL, {
                withCredentials: true, 
            });
            setIsLogged(response.data.isLogged);
        } catch (error) {
            console.error("Error checking login status:", error);
            setIsLogged(false); 
        }
    };

    checkLoginStatus();
}, []);
 

  return (
    <div className='container'>
      {/* aici punem header si footer, si intre ele punem landing si main in fct de care e deschisa */}
      {/* <MainMap /> */}
      <LandingPage/>
    </div>
  )
}

export default App
