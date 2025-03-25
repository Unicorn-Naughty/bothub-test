import React from 'react';
interface Props {
 children: React.ReactNode
}

export const SidebarContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className='px-4 py-5 bg-elemColor'>
        {children}
    </div>
  )
}
