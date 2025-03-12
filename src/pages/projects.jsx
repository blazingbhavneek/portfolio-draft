import Card from '../components/project_card'
import { projects } from './data';

const Projects = () => {


  return (
    <div className="w-screen h-[700vh] bg-white flex flex-col justify-around content-center items-center">
        {
        projects.map( (project, i) => {
          return <Card key={`p_${i}`} i={i} {...project} range={[i * .25, 1]}/>
        })
      }
    </div>
  )
}

export default Projects