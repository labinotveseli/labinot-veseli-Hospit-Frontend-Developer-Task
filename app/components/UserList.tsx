interface User {
  id: number
  name: string
  email: string
  phone: string
}

interface UserListProps {
  users: User[]
  onEdit: (user: User) => void
  onDelete: (userId: number) => void
}

const UserList = ({ users, onEdit, onDelete }: UserListProps) => {
  return (
    <div className='overflow-x-auto rounded-lg shadow-md'>
      <table className='min-w-full border-collapse overflow-hidden rounded-lg'>
        <thead>
          <tr className='bg-white'>
            <th className='border border-l-0 border-t-0 border-gray-300 px-4 py-2 first:rounded-tl-lg last:rounded-tr-lg'>
              #
            </th>
            <th className='border border-l-0 border-t-0 border-gray-300 px-4 py-2'>
              Name
            </th>
            <th className='border border-t-0 border-gray-300 px-4 py-2'>
              Email
            </th>
            <th className='border border-t-0 border-gray-300 px-4 py-2'>
              Phone
            </th>
            <th className='border border-r-0 border-t-0 border-gray-300 px-4 py-2 last:rounded-tr-lg'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className='bg-white last:rounded-bl-lg last:rounded-br-lg hover:bg-gray-100'
            >
              <td className='border border-l-0 border-t-0 border-gray-300 px-4 py-2 text-center'>
                {index + 1}
              </td>
              <td className='border border-gray-300 px-4  py-2'>{user.name}</td>
              <td className='border border-gray-300 px-4  py-2'>
                {user.email}
              </td>
              <td className='border border-gray-300 px-4  py-2'>
                {user.phone}
              </td>
              <td className='border border-gray-300 px-4  py-2'>
                <button
                  onClick={() => onEdit(user)}
                  aria-label={`Edit ${user.name}`}
                  className='mr-4 rounded bg-blue-500 px-2 py-1 text-white'
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  aria-label={`Delete ${user.name}`}
                  className='rounded bg-red-500 px-3 py-1 text-white'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
