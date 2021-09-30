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
        return "I'm a computer science student and a web developer from Tunisia 🇹🇳. I love creating new things with technology. I'm currently trying to improve my english and learning mobile development using React Native."
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
      usage: 'ed',
      fn: () => {
        return 'Jul 2021 - Sep 2021 : Software development intern at OnePack 👨🏻‍💻'
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
