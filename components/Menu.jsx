import React from 'react'
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs'

const Menu = ({showCatMenu, setShowCatMenu}) => {
    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", url: "/contact" },
    ];
    
    const subMenuData = [
        { id: 1, name: "Jordan", doc_count: 11 },
        { id: 2, name: "Sneakers", doc_count: 8 },
        { id: 3, name: "Running shoes", doc_count: 64 },
        { id: 4, name: "Football shoes", doc_count: 107 },
    ];
    return (
        <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
          {data.map((item) => {
            return (
            
              <React.Fragment key={item.id}>
                {!!item.subMenu ? (
                  <li className='cursor-pointer flex items-center gap-2 relative'
                  onMouseEnter={()=> setShowCatMenu(true)}
                  onMouseLeave={()=> setShowCatMenu(false)}>
                    {item.name}
                    <BsChevronDown />
                    {showCatMenu && (
                      <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 pl-1 text-black shadow-lg '>
                        {subMenuData.map((subMenu) => {
                          return (
                            <Link key={subMenu.id} href='/' onClick={()=> setShowCatMenu(false)}>
                              <li className='h-12 flex items-center justify-between px-3 hover:bg-black/[0.03] rounded-md'>
                                {subMenu.name}
                                <span className='opacity-50 text-sm'>{subMenu.doc_count}</span>
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ) : (
                  <Link href={item.url}>
                    <li className='cursor-pointer'>{item.name}</li>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      );
    };
    


export default Menu