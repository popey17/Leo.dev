import React from 'react'

type ExplodeTextProps = {
  children: React.ReactNode;
};

const ExplodeText = ({children}: ExplodeTextProps) => {
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default ExplodeText