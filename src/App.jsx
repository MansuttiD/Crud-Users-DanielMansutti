import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
const baseURL = 'https://users-crud1.herokuapp.com'


function App() {
 
  const [users, setUsers] = useState()
  const [updateUser, setUpdateUser] = useState()
  const [modal, setModal] = useState(true)

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
}

const createNewUser = data => {
    const url = `${baseURL}/users/`
    axios.post(url, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
}

const deleteUserById = id => {
  const URL = `${baseURL}/users/${id}/`
  axios.delete(URL)
  .then(res => {
    console.log(res.data)   
    getAllUsers()
})
  .catch(err => console.log(err))
}

const updateUserById = (id,data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
    .then(res => {
      console.log(res.data)   
      getAllUsers()
    })
  .catch(err => console.log(err))
  }

  const handleModal = () => {
    setModal(!modal)
    console.log(modal);
  }

  return (
    <div className="App">
      <header className='App__heder'>
        <h1 className='App__h1'>Users Crud</h1> 
        <span className='App__span'>Daniel Mansutti</span>
        <button className='create__user' onClick={handleModal}>crear usuario</button>
      </header>
      <section className={`modal ${modal ? 'modal--show' : 'modal--hide'}`}>
     <div className="modal__container">
          <FormUsers 
          createNewUser = {createNewUser}
          updateUser = {updateUser}
          setUpdateUser = {setUpdateUser}
          updateUserById = {updateUserById}
          handleModal = {handleModal}
          />
        </div>
      </section>
     
        <div className="users-container">
        {
        users?.map(user => (          
          <UserCard 
            key={user.id}
            user = {user}
            deleteUserById = {deleteUserById}
            handleModal = {handleModal}
            setUpdateUser = {setUpdateUser}
          />
        ))
      }      
        </div>
    </div>
  )
}

export default App

