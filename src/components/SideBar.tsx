import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PageURL } from 'types/pagesType';

const SideBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pageOptions = [
    {
      pageTitle: 'Dashboard',
      pageLink: PageURL.DashBoardPage,
    },
    {
      pageTitle: 'Sobre',
      pageLink: PageURL.AboutPage,
    },
  ]

  return (
    <nav id='sidebar-id' className='flex flex-col bg-primaryColor  desktop: min-w-fit h-full py-2'>
      <img
        id='kabum-logo-id'
        className='desktop: w-[200px] h-[80px] m-5'
        src='https://static.kabum.com.br/conteudo/temas/001/imagens/topo/logo_kabum_mobile.svg'
        alt='kabum-logo'
      />
      <div id='sidebar-items-id' className='flex flex-col gap-3'>
        {pageOptions.map(pageOption => 
          <div
            key={`page-${pageOption.pageTitle}-id`}
            id={`page-${pageOption.pageTitle}-id`}
            className={`w-auto hover:bg-secondaryColor cursor-pointer ${location.pathname === pageOption.pageLink && 'bg-secondaryColor'}`}
          >
            <p
              className="text-xl text-center text-textColor p-3 select-none"
              onClick={() => navigate(pageOption.pageLink)}
            >
              {pageOption.pageTitle}
            </p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default SideBar;