interface WorkExperienceProps {
  jobTitle: string
  company: string
  startDate: string
  endDate: string
  location: string
  whatIlearned: string
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  jobTitle,
  company,
  startDate,
  endDate,
  whatIlearned,
  location,
}) => {
  return (
    <p className="flex flex-col text-gray-600 dark:text-gray-400 mb-10 pt-4">
      <span className="text-lg">
        {' '}
        <span className="dark:text-white text-black">{jobTitle}</span> at{' '}
        {company}
      </span>
      <span>
        {startDate} - {endDate}
      </span>
      <span>{location}</span>
      <span>
        <span className="dark:text-white text-black">- What I learned : </span>{' '}
        <span>{whatIlearned}</span>
      </span>
    </p>
  )
}
export default WorkExperience
