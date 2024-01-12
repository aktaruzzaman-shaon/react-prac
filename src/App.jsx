import './App.css'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'
import Query from './Components/Query/Query'
import GetPost from './Components/Reducer/GetPost'
import GetPost2 from './Components/Reducer/GetPost2'
import Todo from './Components/Todo/Todo'
import Axios from './Components/axios/Axios'
import Quote from './Components/fetch/Quote'


function App() {
  return (
    <div>
      {/* <Quote></Quote> */}
      {/* <Axios></Axios> */}
      {/* <Query></Query> */}
      {/* <GetPost></GetPost> */}
      {/* <GetPost2></GetPost2> */}
      <Todo></Todo>
    </div>
  )
}

export default App
