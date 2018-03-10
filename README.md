## Break the App into Components

Week 1 Curriculum for React Bootcamp.

## Break the app into components
- Map out the the component structure of the app by examining the app’s working UI... Visual components often map tightly to their respective React components.
- Apply single-responsibility principle to break components down so that each has minimal viable functionality.
- Think about components as you would functions or objects. A component should, ideally, only be responsible for one piece of - functionality.
- Separation of responsibility keeps components simple and improves their re-usability.

## Build a static version of the app
- Lay the framework for the app, getting a clear idea of how the component tree is organized
- Bottom-level (user-visible) components render HTML based on static props, passed down from parents.
- Bottom-level components - also known as leaf components - hold the majority of the page’s HTML. This is generally the case. - The components above leaf components are primarily concerned with orchestration.
- Pass down static props
