import React, { FC, useState } from 'react'
import Dropdown from './Dropdown/Dropdown'

import { Item } from './item.type'

import "./SidebarMenu.css"

interface ISidebarMenu {
  menuItems: Item[]
  isShow: boolean
}

const SidebarMenu: FC<ISidebarMenu> = ({ menuItems, isShow }) => {
  const [isOpen, setIsOpen] = useState(isShow)

  const handleSidebar = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <button onClick={handleSidebar} >
        Toggle sidebar
      </button>

      {
        isOpen ?
          <div className='bg-close' onClick={handleSidebar}></div>
          :
          <></>
      }

      <aside className={`sidebar ${isOpen ? "sidebar_acitve" : ""}`}>
        <h3>Sidebar Menu Component</h3>
        <ul className='sidebar-menu'>
          {
            menuItems.map((el, indx) => (
              <li className='menu__item' key={el.href + indx}>
                {
                  el.submenu ?
                    <Dropdown title={el.title} list={el.submenu} />
                    :
                    <a className='menu-button' href={el.href} >{el.title}</a>
                }
              </li>
            ))
          }
        </ul>
      </aside>


    </>
  )
}

export default SidebarMenu