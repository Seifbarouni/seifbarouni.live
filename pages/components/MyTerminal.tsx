import { Dispatch, SetStateAction } from 'react'
import Terminal from 'react-console-emulator'

interface MyTerminalProps {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const commands = (setOpen: Dispatch<SetStateAction<boolean>>) => {
  return {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: function () {
        return `${Array.from(arguments).join(' ')}`
      },
    },
    exit: {
      description: 'Close the terminal',
      usage: 'exit',
      fn: () => setOpen(false),
    },
    about: {
      description: 'Description about me',
      usage: 'about',
      fn: () => {
        return "I'm a computer science student and a full stack web developer. I'm currently interested in learning more about compilers and transpilers."
      },
    },
    pr: {
      description: 'A list of my recent projects',
      usage: 'pr',
      fn: () => {
        return '- Brave Blog : A blog built with React that has a simple livestream feature.\n - Comm : A social media app inspired by Reddit\n- Project Management Web App : A Spring Boot application that helps teams and individuals organize their projects. \nFor more information, visit : https://github.com/Seifbarouni'
      },
    },
    ed: {
      description: 'My education',
      usage: 'ed',
      fn: () => {
        return 'Computer science stuent at University of Tunis El Manar 📚'
      },
    },
    exp: {
      description: 'My work experience',
      usage: 'exp',
      fn: () => {
        return 'Jul 2021 - Sep 2021 : Software development intern at OnePack 👨🏻‍💻'
      },
    },
    contact: {
      description: 'My email',
      usage: 'contact',
      fn: () => {
        return 'seif.barouni11@gmail.com'
      },
    },
  }
}

const MyTerminal: React.FC<MyTerminalProps> = ({ setOpen }) => {
  return (
    <div className="pb-2 bg-black rounded-sm flex flex-col relative">
      <div className=" bg-gray-600 flex  justify-between  top-0 w-full sticky px-4 h-8 rounded-t-sm cursor-pointer">
        <div className="mt-1 shadow-lg  rounded-t-sm px-6 bg-gray-500 text-white">
          <div className="mt-0.5">terminal</div>
        </div>
        <div className="cursor-pointer mt-2" onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <Terminal
        commands={commands(setOpen)}
        welcomeMessage={
          'Welcome to my terminal! Type "help" to see the options'
        }
        autoFocus={true}
        promptLabel={'terminal@user:/$'}
        promptLabelStyle={{
          color: '#bcf737',
        }}
        inputTextStyle={{
          color: 'white',
        }}
        messageStyle={{
          color: '#BCBCBC',
        }}
        style={{
          backgroundColor: 'black',
        }}
      />
    </div>
  )
}
export default MyTerminal
