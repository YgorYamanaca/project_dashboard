import AppContainer from 'components/AppContainer';
import React from 'react';

const AboutPage: React.FC = () => {

  return (
    <div id='about-page-id' className='flex w-full justify-center items-center'>
      <AppContainer>
        <p id='about-page-title-id' className='text-3xl text-center font-bold my-4'>
          Sobre esse projeto
        </p>
        <p id='about-page-text-id' className='text-xl text-center'>
          Esse projeto foi desenvolvido como parte do desafio técnico para criação de um dashboard para exibição dos dados.
        </p>
      </AppContainer>
    </div>
  )
}

export default AboutPage;