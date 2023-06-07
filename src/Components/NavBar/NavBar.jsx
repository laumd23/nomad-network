import { HomeFilled, PlusCircleFilled, UnlockFilled, EnvironmentOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { Avatar, Modal } from 'antd';
import { GlobalContext } from '../../context/UsersState'
import { CreatePostNew } from '../CreatePostNew/CreatePostNew'
import { Logo } from '../../resources/Logo'
import './NavBar.scss'
import { ChatLayout } from '../Chat/components/ChatLayout';
import { CreatePostAI } from '../CreatePostNew/CreatePostAI';

export const NavBar = () => {
  const navigate = useNavigate()
  const { reset, logOut, user } = useContext(GlobalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formWithIA, setFormWithIA] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAction = () => {
    setFormWithIA(!formWithIA);
  }


  return (
    <div className='navbar'>
      <ChatLayout/>
      <Logo/>
      <div className='container-nav'>
        <div className='home' onClick={() => navigate('/')}><HomeFilled className='iconHome' /><div className='divHome'>Home</div> </div>
        <div className='profile' onClick={() => navigate('/profile')}><Avatar style={{
          objectFit: 'cover',
          border: '0.5px solid rgb(0,0,0, 0.7)'
        }} size={26} shape={'circle'} src={user?.avatar} /><div className='divProfile' style={{
          padding: '0'
        }}>Profile</div></div>
        <div className='create' onClick={() => setIsModalOpen(!isModalOpen)} >
          <PlusCircleFilled className='iconCreate' />
          <div className='divCreate'>Post</div>
        </div>
        <div className='logout' onClick={() => navigate('/countries')}>
          <EnvironmentOutlined className='iconlogout'/> <div className='divLogout'>Countries</div>
        </div>
        <div className='logout'
          onClick={() => {
            logOut(),
            navigate('/')
            reset()
          }}>
          <UnlockFilled className='iconlogout' /><div className='divLogout'>Log out</div></div>

      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered  footer={null} >
        {formWithIA === false? <CreatePostNew onAction={handleAction} onClose={handleCancel} /> : <CreatePostAI onAction={handleAction} onClose={handleCancel}/>}
        
      </Modal>
    </div>
  )
}
