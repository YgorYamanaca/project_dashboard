import React from 'react';

const AboutPage: React.FC = () => {

  return (
    <div id='about-page-id' className='flex w-full justify-center items-center'>
      <div id='about-page-container-id' className='flex flex-col w-[750px] h-[550px] bg-white drop-shadow-md p-6'>
        <p id='about-page-title-id' className='text-3xl text-center font-bold my-4'>
          Sobre esse projeto
        </p>
        <p id='about-page-text-id' className='text-xl text-center'>
          Esse projeto foi desenvolvido como parte do desafio técnico para criação de um dashboard para exibição dos dados.
        </p>
      </div>
    </div>
  )
}

export default AboutPage;