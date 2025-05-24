//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import { StrictMode } from 'react'
import { render } from 'react-dom'

render(
  <StrictMode>
    <div>
        <h1>Food List</h1>
        <ul>
            <li>Chinese Noodles</li>
            <li>Italian Pizza</li>
            <li>Italian Pasta</li>
        </ul>
    </div>
  </StrictMode>,
  document.getElementById('root')
)
