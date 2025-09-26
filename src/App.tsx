import { useState } from 'react'
import './App.css'

function App() {
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0)

  const catPoems = [
    {
      title: "Midnight Whiskers",
      text: "Soft paws in moonlight gleam,\nWhiskers twitching in a dream.\nPurring songs of ancient lore,\nCat tales from forever more."
    },
    {
      title: "Window Watcher",
      text: "Perched upon the windowsill,\nWatching birds with focused skill.\nTail a-swishing, eyes so bright,\nNature's show, pure delight."
    },
    {
      title: "Nap Time",
      text: "Curled in sunbeams, warm and sweet,\nWhispered purrs in rhythm beat.\nDreaming deep of mouse ballet,\nPerfect peace on lazy day."
    }
  ]

  const nextPoem = () => {
    setCurrentPoemIndex((prev) => (prev + 1) % catPoems.length)
  }

  const currentPoem = catPoems[currentPoemIndex]

  return (
    <div className="poem-container">
      <h1>Cat Poems</h1>
      <div className="poem-card">
        <h2>{currentPoem.title}</h2>
        <pre>{currentPoem.text}</pre>
        <button onClick={nextPoem}>Next Poem</button>
      </div>
    </div>
  )
}

export default App