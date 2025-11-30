import React, { FC, useState } from 'react'
import "../SidebarMenu.css"
import "./Dropdown.css"

import { Item } from '../item.type'

interface IDropmenu {
  title: string
  list: Item[]
}

const Dropdown: FC<IDropmenu> = ({ title, list }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleDropdawnMenu = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <button
        onClick={handleDropdawnMenu}
        className="menu-button menu-button_dropdown">
        {title}
        <span className={`menu-button_icon ${isOpen ? "menu-button_icon_active" : '' }`}></span>
      </button>
      <ul className={`dropdown-menu ${isOpen ? "dropdown-menu_active" : ""}`}>
        {
          list.map((el, indx) => (
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
    </div>
  )
}

export default Dropdown
