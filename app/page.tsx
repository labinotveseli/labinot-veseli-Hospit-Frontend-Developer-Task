'use client'

import { useEffect, useState } from 'react'
import axiosInstance from './utils/axiosInstance'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import DeleteConfirmationModal from './components/DeleteModal'
import EditUserForm from './components/EditUserForm'

interface User {
  id: number
  name: string
  email: string
  phone: string
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([])
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState<User | null>(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const localData = localStorage.getItem('users')
      if (localData) {
        setUsers(JSON.parse(localData))
      } else {
        const response = await axiosInstance.get<User[]>('/')
        setUsers(response.data)
        localStorage.setItem('users', JSON.stringify(response.data))
      }
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  const handleAddUser = (user: User) => {
    let updatedUsers: User[]

    const newUser: User = {
      ...user,
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
    }
    updatedUsers = [...users, newUser]

    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers))
  }

  const handleEditUser = (user: User) => {
    setEditingUser(user)
  }

  const handleDeleteUser = (userId: number) => {
    const updatedUsers = users.filter(user => user.id !== userId)
    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers))
    setIsDeleteModalOpen(false)
  }

  const handleOpenDeleteModal = (userId: number) => {
    const user = users.find(u => u.id === userId)
    if (user) {
      setUserToDelete(user)
      setIsDeleteModalOpen(true)
    }
  }

  const handleConfirmDelete = () => {
    if (userToDelete) {
      handleDeleteUser(userToDelete.id)
      setUserToDelete(null)
    }
  }

  const handleCloseEditForm = () => {
    setEditingUser(null)
  }

  const handleSubmitEditUser = (updatedUser: User) => {
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    )
    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers))
    handleCloseEditForm()
  }

  return (
    <div className='align-center my-20 justify-center space-x-5 sm:flex'>
      <div className='h-auto'>
        <UserForm onSubmit={handleAddUser} />
      </div>
      <div className='mt-10 h-auto w-auto overflow-y-auto rounded text-xs shadow-md sm:mt-0 sm:text-base '>
        <UserList
          users={users}
          onEdit={handleEditUser}
          onDelete={handleOpenDeleteModal}
        />
      </div>

      {editingUser && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <h2>Edit User</h2>
            <EditUserForm
              user={editingUser}
              onSubmit={handleSubmitEditUser}
              onClose={handleCloseEditForm}
            />
          </div>
        </div>
      )}

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        user={userToDelete}
      />
    </div>
  )
}

export default Home
