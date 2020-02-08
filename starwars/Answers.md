# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library for building user interfaces. React limits work done by DOM by introducing engine called the virtual DOM that interacts with the real DOM. React detects where and how state (or data) of the application has changed and update only those specific nodes on the actual DOM.

1. What does it mean to think in react?

React is built around components so to think in React is to create componenets that will be responsible for one thing only. It is also about
writing the entire application in JS by limiting HTML to one roor element only. Last but not least to have one place to manage data that will be later used by child componenets.

1. Describe state.

State is an object where you store property values that are generated and belongs to the component. The component rerenders when the state changes.

1. Describe props.

Props are arguments used to pass data from one component to another component.
We never make changes to props data - props are read-only.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side Effect is when function tries to modify anything outside its body. An effect is synced with state or props changedby passing
a dependecy array with state.
