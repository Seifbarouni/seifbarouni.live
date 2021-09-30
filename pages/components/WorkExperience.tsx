interface WorkExperienceProps {}

const WorkExperience: React.FC<WorkExperienceProps> = () => {
  return (
    <p className="flex flex-col text-gray-600 dark:text-gray-400 mb-16 pt-4">
      <span className="text-lg">
        {' '}
        <span className="dark:text-white text-black">
          Software development intern
        </span>{' '}
        at OnePack 👨🏻‍💻
      </span>
      <span>Jul 2021 - Sep 2021</span>
      <span>Tunis, Tunisia</span>
      <span>
        <span className="dark:text-white text-black">- What I learned : </span>{' '}
        <span>Redux, react-redux, redux thunks, antdesign, express</span>
      </span>
    </p>
  )
}
export default WorkExperience
