import React, { useEffect} from 'react'
import { useForm } from 'react-hook-form'
import './styles.css/formUsers.css'



const FormUsers = ({createNewUser, updateUser, updateUserById, setUpdateUser, handleModal}) => {

    const handleReset = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    }

    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
        if (updateUser) {
            reset(updateUser)
        }

    }, [updateUser])
    

    const submit = data => {
        if (updateUser) {
            updateUserById(updateUser.id, data)
            setUpdateUser()
        } else {
            createNewUser(data)
        }
        
        reset(handleReset)
    }

    const resetModal = () => {
        handleModal()
        reset(handleReset);
        setUpdateUser();
    }


  return (

    <div className='div__form' >
        <button className='modal__close' onClick={resetModal}>X</button>
        <form 
        onSubmit={handleSubmit(submit)} className='form'
        >
            <h2 className='form__title'>{updateUser ? "Edit User" : 'New User'}</h2>
            <div className='form__div'>
                <label className='form__label' htmlFor="email">Email</label>
                <input className='form__input' type="email" id="email" {...register('email')} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="password">Password</label>
                <input className='form__input' type="password" id="password" {...register('password')}/>
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="first_name">First Name</label>
                <input className='form__input' type="text" id="first_name" {...register('first_name')} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="last_name">Last Name</label>
                <input className='form__input' type="text" id="last_name" {...register('last_name')}/>
            </div>
            <div className='form__div'>
                <label className='form__label form__birthday'  htmlFor="birthday">Birthday</label>
                <input className='form__input' type="date" id="birthday" {...register('birthday')} />
            </div>
            <button className='form__btn' onClick={handleModal}>{updateUser ? "Update" : "Create"}</button>
        </form>
    </div>
  )
}

export default FormUsers