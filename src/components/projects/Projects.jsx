import "./projects.css"

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-present">
        <h3>Project name</h3>
        <div className="projects-line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores, cum doloremque commodi, porro, distinctio excepturi architecto sed libero nam quos? Sit, hic. Expedita, quae possimus repudiandae similique quia placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab nihil eius nisi iure suscipit ea, corrupti adipisci exercitationem consequatur optio aliquid eaque natus atque facere repellat laudantium quasi nemo temporibus maxime qui hic, ratione molestiae.
          <br /><br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea esse laboriosam dolorem non maiores facere fugiat dolor commodi asperiores nam, ullam fuga velit, adipisci deleniti! Consequuntur quibusdam temporibus neque cupiditate!
        </p>
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