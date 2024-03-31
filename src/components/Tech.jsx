import { BallCanvas } from "./canvas"
import { styles } from '../style';
import { motion } from 'framer-motion'
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mb-2`}>Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 hover:cursor-move" key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon}/>
            <div className="text-center my-1">{technology.name}</div>
          </div>
        ))}
      </div>
    </>
  )

}

export default SectionWrapper(Tech, '')