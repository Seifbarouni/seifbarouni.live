interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
  return (
    <p className="flex flex-col text-gray-600 dark:text-gray-400 mb-16 pt-4">
      <span className="text-lg dark:text-white text-black">
        University of Tunis El Manar
      </span>
      <span className="dark:text-white text-black font-semibold">
        Engineer's degree, Computer Science
      </span>
      <span>2019 - Present</span>
      <span>Tunis, Tunisia</span>
    </p>
  )
}
export default Education
