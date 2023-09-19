import logo from './logo.svg';
import './App.css';
import Task from './components/task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" desc="this is the description for the first task"/>
   
      <Task title="Tidy" deadline="Today" desc="this is the description for the second task" />
      <Task title="Laundry" deadline="Tomorrow" desc="this is the description for the third task">
        
    </Task>
    </div>
  );
}

export default App;
