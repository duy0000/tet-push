import { Link } from 'react-router'
import { ReactNode } from 'react'

interface Props {
  icon: any
  text: string
  to: string
  onClick?: () => void
  children?: ReactNode
}

const DropdownProfileItem = ({ icon, text, to, onClick, children }: Props) => {
  return (
    <>
      <Link
        onClick={() => {
          onClick && onClick()
        }}
        to={to}
      >
        {children ? (
          children
        ) : (
          <p className='flex items-center gap-x-1 text-slate-600 hover:border hover:border-slate-200 py-2 px-1 rounded-xl'>
            {icon}
            <span>{text}</span>
          </p>
        )}
      </Link>
    </>
  )
}

export default DropdownProfileItem
