import React from 'react';

interface AppContainerInterface {
  width?: number,
  height?: number,
}

const AppContainer: React.FC<AppContainerInterface> = ({
  children,
}) => {

  return (
    <div id='app-container-id' className={`flex flex-col w-[750px] h-auto bg-white drop-shadow-md p-6`}>
      {children}
    </div>
  )
}

export default AppContainer;