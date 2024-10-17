import { useState, FormEvent } from 'react'

interface User {
  id: number
  name: string
  email: string
  phone: string
}

interface EditUserFormProps {
  user: User
  onSubmit: (user: User) => void
  onClose: () => void
}

const EditUserForm = ({ user, onSubmit, onClose }: EditUserFormProps) => {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit({ ...user, name, email, phone })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='modal-content space-y-4 rounded bg-white p-4'
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
        type='text'
        value={phone}
        placeholder='Phone'
        onChange={e => setPhone(e.target.value)}
        required
      />
      <div className='modal-buttons flex justify-end space-x-2'>
        <button type='submit' className='save-button'>
          Save
        </button>
        <button type='button' onClick={onClose} className='cancel-button'>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditUserForm
