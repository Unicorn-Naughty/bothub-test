import React from 'react';
interface Props {
 children: React.ReactNode
}

export const RootContainer: React.FC<Props> = ({children}) => {
  return (
    <div className='p-4  text-white max-w-[1920px]'>
        {children}
    </div>
  )
}
