import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import ScheduledRepair from "./components/ScheduledRepairs/ScheduledRepairs";
import InventoryView from './components/InventoryView/InventoryView';
import CustomerView from './components/CustomerView/CustomerView';
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <AppBar />
      <Hero />
      <div className='flex flex-wrap items-start justify-center'>
        <ScheduledRepair />
        <InventoryView />
      </div>
      <div>
        <CustomerView />
      </div>
    </div>
  );
}

export default App;
