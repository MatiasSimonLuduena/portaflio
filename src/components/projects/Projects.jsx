import "./projects.css"

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-present">
        <h3>Project name</h3>
        <div className="projects-line"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores, cum doloremque commodi, porro, distinctio excepturi architecto sed libero nam quos? Sit, hic. Expedita, quae possimus repudiandae similique quia placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a voluptate ipsa in harum, atque quisquam iste nobis quidem suscipit at voluptatibus autem laudantium accusamus consequuntur excepturi nulla sint aliquam? Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button>
          View website
          <div className="button-line"></div>
        </button>
      </div>
      <div className="all-projects">
        <h3>All projects</h3>
        <ul className="list-projects">
          <li>
            Project one
            <div className="li-line"></div>
          </li>
          <li>
            Project.js
            <div className="li-line"></div>
          </li>
          <li>
            Project two
            <div className="li-line"></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projects