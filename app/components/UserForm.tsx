import { useState, FormEvent } from 'react'

interface User {
  id: number
  name: string
  email: string
  phone: string
}

interface UserFormProps {
  onSubmit: (user: User) => void
}

const UserForm = ({ onSubmit }: UserFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const newUser: User = {
      id: 0,
      name,
      email,
      phone
    }

    onSubmit(newUser)
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='modal-content h-auto w-40 space-y-4 rounded bg-white p-4 shadow-md'
    >
      <input
        type='text'
        value={name}
        placeholder='Name'
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type='email'
        value={email}
        placeholder='Email'
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type='number'
        value={phone}
        placeholder='Phone'
        onChange={e => setPhone(e.target.value)}
        required
      />
      <button
        type='submit'
        className='mb-10 rounded bg-blue-500 px-2 py-1 text-white'
      >
        Add User
      </button>
    </form>
  )
}

export default UserForm
