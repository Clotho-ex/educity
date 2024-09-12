# Clotho Educity

Clotho Educity is an educational platform that provides interactive learning experiences. 
The platform is designed to be responsive and user-friendly, offering access to various educational resources. 
The project is built using React and Vite and is deployed on Netlify.

## Live Demo

You can view the live version of the app [here](https://clotho-educity.netlify.app/).

## Features

- **Interactive UI**: The platform provides a clean and responsive user interface for seamless navigation.
- **Asset Management**: Images and videos are handled efficiently within the app's `dist/assets` folder.
- **Component-Based Architecture**: Built with React components for reusability and modularity.
- **Fast Build**: Developed using Vite for fast build times and optimized performance.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For a fast and optimized development experience.
- **CSS**: For styling the application.
- **Netlify**: For hosting and deploying the project.

## Project Structure

```plaintext
dist/
├── assets/        # Static assets (images, videos)
├── index.html     # The main HTML file
node_modules/      # Project dependencies
public/            # Public files (currently empty)
src/
├── assets/        # Source assets (images, videos)
├── components/    # React components
├── App.jsx        # Main App component
├── index.css      # Global styles
├── main.jsx       # Entry point for the React app
.gitignore         # Git ignore file
eslint.config.js   # ESLint configuration
index.html         # Root HTML file
package.json       # Project dependencies and scripts
README.md          # Project documentation
vite.config.js     # Vite configuration
