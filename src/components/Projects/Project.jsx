import ProjectCard from './ProjectCard'
import './style/style.css'
const Project = () => {
  return (
    <div className="projectMain">
      <div className='projectHeading'>
        <h1>
          Discover The Project that we are proud of.
        </h1>
        <button className='btn projectButton-blue'>Go To The Section</button>
      </div>
      <div className='projectData'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Project