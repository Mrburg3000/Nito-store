import React, { useState } from 'react';
import './MegaMenu.css';
import { menuData } from './menuData'; 

const MegaMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(menuData[0]?.label || null);

  return (
    <nav className="mega-nav">
      <ul className="main-menu">
        {menuData.map((category) => (
          <li
            key={category.label}
            className="menu-item"
            onClick={(e) => { e.preventDefault(); setActiveMenu(category.label); }}
          >
            <a href={category.href} className="menu-link">
              {category.label}
            </a>

            {category.subcategories.length > 0 && activeMenu === category.label && (
              <div className="mega-dropdown">
                <div className="mega-content">
                  {category.subcategories.map((group, idx) => (
                    <div key={idx} className="mega-column">
                      <h4 className="column-title">{group.title}</h4>
                      <ul>
                        {group.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <a href="#">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;