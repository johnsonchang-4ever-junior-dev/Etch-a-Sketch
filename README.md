# Etch-a-Sketch

A digital recreation of the classic Etch-a-Sketch toy, built with HTML, CSS, and JavaScript as part of The Odin Project curriculum.

# How to run

The link to view the project: ''' https://johnsonchang-4ever-junior-dev.github.io/Etch-a-Sketch/index.html '''

## What it does

This web-based Etch-a-Sketch allows users to draw pixel art by hovering over a grid with their mouse. Users can:

- **Draw by holding 'D'**: Press and hold the 'D' key while hovering over grid squares to draw
- **Choose colors**: Use the color picker to select any color for drawing
- **Create custom grids**: Generate new grids with custom sizes (user-specified dimensions)
- **Start fresh**: Clear the canvas and create a new grid at any time

The application starts with a default 36x36 grid and creates a 960x960 pixel drawing area.

## Skills Demonstrated

This project showcases several fundamental web development skills:

### **JavaScript DOM Manipulation**

- Dynamic element creation and styling
- Event handling (keyboard, mouse, and click events)
- Query selectors and element manipulation
- Real-time user input processing

### **CSS Layout & Styling**

- Grid-based layouts using `display: inline-block`
- Responsive design with calculated dimensions
- CSS box model understanding (`outline` vs `border`)
- Visual feedback and UI styling

### **HTML Structure**

- Semantic HTML markup
- Form elements and user controls
- Accessibility considerations with labels

### **Event-Driven Programming**

- Keyboard event listeners (`keydown`, `keyup`)
- Mouse events (`mouseover`, `mouseup`)
- Input events for real-time color updates
- State management (tracking drawing mode)

### **User Experience Design**

- Intuitive controls and visual feedback
- Input validation and error handling
- Prompt-based user interaction
- Color visualization in the UI

### **Mathematical Problem Solving**

- Grid size calculations and dynamic sizing
- Coordinate mapping for grid creation
- Responsive layout mathematics

## How to Use

1. Open `index.html` in a web browser
2. Press and hold the 'D' key
3. Move your mouse over the grid squares to draw
4. Use the color picker to change your drawing color
5. Click "New Grid" to create a custom-sized grid
6. Release the 'D' key to stop drawing

## Project Structure

```
├── index.html    # Main HTML structure and UI elements
├── script.js     # JavaScript functionality and DOM manipulation
├── style.css     # CSS styling and grid layout
└── README.md     # Project documentation
```

---

_This project is part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum, focusing on DOM manipulation and event handling fundamentals._
