import logo from './logo.svg';
import './App.css';
import SidebarComponent from './Screens/Sidebar/SidebarComponent';
import NavigationBar from './Screens/NavigationBar/NavigationBar';
import StatCards from './Screens/Components/StatCards';
import TableComponent from './Screens/Components/TableComponent';

function App() {

  return (
    <div className="App" >
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <SidebarComponent />
        <div style={{ width: '100%' }}>
          <NavigationBar />
          <StatCards />
          <TableComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
