import type { User } from '../App'

type UserCardProps = {
  user: User;
}
const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className='flex flex-none border w-100 border-gray-200 p-4 rounded-4xl shadow-2xl gap-4'>
      <div className='flex h-30 relative'>
        <img className='rounded-full' src={user.picture} alt="" />
        <div className=' absolute bottom-0 right-0'>
          <svg width="40" height="40" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.45 16.875L5.025 14.475L2.325 13.875L2.5875 11.1L0.75 9L2.5875 6.9L2.325 4.125L5.025 3.525L6.45 1.125L9 2.2125L11.55 1.125L12.975 3.525L15.675 4.125L15.4125 6.9L17.25 9L15.4125 11.1L15.675 13.875L12.975 14.475L11.55 16.875L9 15.7875L6.45 16.875ZM8.2125 11.6625L12.45 7.425L11.4 6.3375L8.2125 9.525L6.6 7.95L5.55 9L8.2125 11.6625Z" stroke='#ffffff' strokeWidth="1" fill="#3897F0" />
            <path d="M8.2125 11.6625L12.45 7.425L11.4 6.3375L8.2125 9.525L6.6 7.95L5.55 9L8.2125 11.6625Z" stroke='none' fill="#FFFFFF" />
          </svg>

        </div>
      </div>
      <div className='flex flex-col justify-center px-4 gap-4'>
        <div className='text-4xl font-bold'>{user.name}</div>
        <div className='text-gray-500'>{user.title?.toUpperCase() || "Employee"}</div>
      </div>
    </div>

  )
}

export default UserCard
