import React from 'react';
interface Props {
 className?: string 
}

export const FormLogin: React.FC<Props> = ({ className }) => {
  return (
    <div className={className} >
    FormLogin
    </div>
  )
}
