
import './App.css'
import UserCard from './components/UserCard';

export type User ={
  name: string;
  title?: string;
  picture: string;
}


function App() {
const user1: User={
  name: "Talan Dias",
  title: "ux designer",
  picture: "https://placehold.co/400",
}
const user2: User={
  name: "Talan Dias",
  picture: "https://placehold.co/400",
}
const user3: User={
  name: "Talan Dias",
  title: "",
  picture: "https://placehold.co/400",
}


  return (
    <>
    <div className='flex flex-col gap-2'>
      <UserCard user={user1}/>    
      <UserCard user={user2}/>
      <UserCard user={user3}/>
      </div>    
    </>
  )
}

export default App
