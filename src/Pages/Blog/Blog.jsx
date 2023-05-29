import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>
            <div>
                <h2 className='text-2xl text-red-400'>Differences between uncontrolled and controlled components?
                </h2>
                <p className='w-1/2 py-4'>

                    In the context  development, the terms "uncontrolled components" and "controlled components" refer to two different approaches for managing form inputs and state in user interfaces, particularly in frameworks like React.
                </p>

                <p className='w-1/2 py-4'>
                    <span className='text-2xl font-bold'> Uncontrolled Components:</span><br />
                    <li>State management: In uncontrolled components, the component's state is managed by the DOM itself. The component doesn't have direct control over the state or value of its inputs.</li>
                    <li className='mt-2'>DOM as the source of truth: The DOM is considered the source of truth for the component's state. The component retrieves the current state by querying the DOM whenever it needs it.</li>
                </p>

                <p className='w-1/2 py-4'>
                    <span className='text-2xl font-bold'> Controlled Components:</span><br />
                    <li>State management: In controlled components, the component has direct control over the state and value of its inputs. The state is typically stored in the component's state variables or props.</li>
                    <li className='mt-2'>Component as the source of truth: The component maintains its own state and becomes the source of truth for the values of its inputs. The component's state is updated explicitly in response to user interactions.</li>
                </p>
            </div>

            <div>
                <h2 className='text-2xl text-red-400'>How to validate React props using PropTypes?
                </h2>
                <p className='w-1/2 py-4'>

                    In React, PropTypes is a library that allows you to define the expected types and shapes of props passed to a component. It provides a way to validate the props at runtime and issue warnings in the development environment if the props don't match the specified types. Here's how you can validate React props using PropTypes
                </p>
                <p>
                    <li>Install PropTypes: First, make sure you have the PropTypes library installed in your project. If you're using npm, you can install it by running the command</li>
                    <li>Import PropTypes: Import the PropTypes module in the component file where you want to validate the props.</li>
                    <li>Define prop types: Inside your component, define the prop types using the propTypes property.</li>
                </p>
            </div>

            <div className='mt-8'>
                <h2 className='text-2xl text-red-400'>Difference between nodejs and express js?
                </h2>
                <p className='w-1/2 py-4'>

                Node.js and Express.js are both widely used technologies in the JavaScript ecosystem, but they serve different purposes. Here are the key differences between Node.js and Express.js
                </p>

                <p className='w-1/2 py-4'>
                    <span className='text-2xl font-bold'> Node.js:</span><br />
                    <li>Runtime Environment: Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser. It uses the V8 JavaScript engine to run JavaScript on the server-side.</li>

                    <li className='mt-2'>Server-Side JavaScript: Node.js enables you to build server-side applications and services using JavaScript. It provides an event-driven, non-blocking I/O model that makes it efficient for handling concurrent requests.</li>
                </p>

                <p className='w-1/2 py-4'>
                    <span className='text-2xl font-bold'>Express.js:</span><br />
                    <li>Web Application Framework: Express.js is a minimalist and flexible web application framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs.</li>
                    <li className='mt-2'>Routing: Express.js offers a simple and intuitive routing mechanism that allows you to define routes for handling HTTP requests with different methods (GET, POST, PUT, DELETE, etc.) and URLs.</li>
                </p>
            </div>


            <div className='mt-8'>
                <h2 className='text-2xl text-red-400'>What is a custom hook, and why will you create a custom hook?
                </h2>
                <p className='w-1/2 py-4'>

                A custom hook in React is a JavaScript function that utilizes the existing React hooks to encapsulate and reuse logic in functional components. It allows you to extract common functionality from components into reusable functions, promoting code reusability and making the codebase more maintainable.
                </p>

                <p className='w-1/2 py-4'>
                    <span className='text-2xl font-bold '>Here are a few reasons why you might want to create a custom hook:</span><br />
                    <li className='mt-2'>Code Reusability: Custom hooks enable you to encapsulate and share logic across multiple components. If you find yourself duplicating code in different components, extracting that shared logic into a custom hook allows you to reuse it easily.</li>

                    <li className='mt-2'>Abstraction and Encapsulation: Custom hooks abstract away complex logic and provide a cleaner interface to components. By encapsulating certain functionality within a custom hook, you can simplify the component code and make it more focused on the component's specific responsibilities.</li>
                </p>
            </div>
            
        </div>
    );
};

export default Blog;