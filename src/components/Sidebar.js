import '../scss/Sidebar.scss';
import Search from "./Search";
import SidebarListItem from './SidebarListItem';

const categories = [
  {
    "id": 0,
    "title": "React.js",
    "url": "react",
    "sub_categories": [
      {
        "id_sc": 0,
        "sc_title": "Статьи",
        "sc_url": "react/articles"
      },
      {
        "id_sc": 1,
        "sc_title": "Скрипты",
        "sc_url": "react/scripts"
      },
    ]
  },
  {
    "id": 1,
    "title": "PHP",
    "url": "php",
    "sub_categories": [
      {
        "id_sc": 0,
        "sc_title": "Статьи",
        "sc_url": "php/articles"
      },
      {
        "id_sc": 1,
        "sc_title": "Скрипты",
        "sc_url": "php/scripts"
      },
    ]
  },
  {
    "id": 2,
    "title": "JavaScript",
    "url": "js",
    "sub_categories": [
      {
        "id_sc": 0,
        "sc_title": "Статьи",
        "sc_url": "js/articles"
      },
      {
        "id_sc": 1,
        "sc_title": "Скрипты",
        "sc_url": "js/scripts"
      },
    ]
  },
  {
    "id": 3,
    "title": "HTML",
    "url": "html"
  },
  {
    "id": 4,
    "title": "CSS",
    "url": "css"
  },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <Search />
      <ul className="menu-list">
        {categories.map(category => (
          <SidebarListItem 
            key={category.id} 
            title={category.title}
            url={category.url} 
            subcategories={category.sub_categories} 
           />
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar;