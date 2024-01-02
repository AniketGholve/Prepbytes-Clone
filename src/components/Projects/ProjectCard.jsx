const ProjectCard = () => {
    return (
        <div className="projectCard">
            <div className="projectCardImg">
                <img src="/public/project-images/todo-js.png" alt="" />
            </div>
            <div className="projectCardInfo">
                <h2>Todo-js</h2>
                <button className="btn">View Project</button>
            </div>
        </div>
    )
}

export default ProjectCard