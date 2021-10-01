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
    <div className="pt-1 pb-2 bg-black rounded-sm">
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
