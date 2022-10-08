import React from 'react'
import './styles.css/userCard.css'
import { ImGift } from "react-icons/im";
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";


const UserCard = ({user, deleteUserById, setUpdateUser, handleModal}) => {

  const handleUpdate = () => {
    setUpdateUser(user);
    handleModal();
  }

  return (
    <article className='user'>
        <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user__list' >
            <li className='user__item' ><span className='user__span' >Email:</span>{user.email}</li>
            <li className='user__item' ><span className='user__span' >BirthDay:</span>
              <div className='user__item-container' >
                  <ImGift className='user__gift' />
                  {user.birthday}
                </div>
            </li>
        </ul>
        <footer className='user__footer' >
            <button  className='user__btn' onClick={() => deleteUserById(user.id)}>
            <BsTrash className='btn__icon'  />
            </button>
            <button  className='user__btn' onClick={handleUpdate}>
            <BsPencilSquare className='btn__icon'  />
            </button>
        </footer>
    </article>
  )
}

export default UserCard