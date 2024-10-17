interface User {
  id: number
  name: string
  email: string
  phone: string
}

interface DeleteConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  user: User | null
}

const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  user
}: DeleteConfirmationModalProps) => {
  if (!isOpen || !user) return null

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <p className='mb-6 text-lg font-semibold'>
          Are you sure you want to delete this user?
        </p>
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Phone:</strong> {user.phone}
        </div>
        <div className='modal-buttons'>
          <button className='delete-button' onClick={onConfirm}>
            Yes
          </button>
          <button className='delete-button-2' onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmationModal
