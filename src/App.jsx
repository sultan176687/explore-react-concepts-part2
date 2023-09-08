
import './App.css'
import Counter from './counter'
import Friends from './friends'
import Team from './team'
import Users from './users'

function App() {
  function handleClick(){
    alert('button click')
  }
  const handleClick2 = () =>{
    alert('button 2 click')
  }
  const addFive = (num) =>{
    alert (num + 5)
  }

  return (
    <>
      <div>
      
      </div>
      <h3>React core concepts</h3>
      <Friends></Friends>
      
      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => {alert('third')}}>Third</button>
      <button onClick={() => addFive(3)}>Third</button>
     
    </>
  )
}

export default App
