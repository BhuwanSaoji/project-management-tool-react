import './App.css';
import Login from './Components/Login/Login.jsx';
import {NotificationContainer} from 'react-notifications';

import 'react-notifications/lib/notifications.css';



function App() {
  return (
    <div className="App">
      <NotificationContainer/>
      <Login/>
      
    </div>
  );
}

export default App;
