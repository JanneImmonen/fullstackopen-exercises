# Courseinfo

This project is part of the Full Stack Open course from the University of Helsinki. It's a simple React application that displays information about a course and its parts.

## Project Structure

The project consists of a single React component, `App`, which is defined in `App.js`. The `App` component contains the following data:

- The name of the course: 'Half Stack application development'
- An array of parts for the course. Each part is an object that has a `name` and `exercises` property.

The `App` component renders this data into a simple HTML structure.

## Running the Project

To run the project, navigate to the project's directory and run `npm start`. This will start the development server, and the application will be available at `http://localhost:3000`.

## Future Improvements

- Refactor the `App` component to use multiple components for better separation of concerns.
- Add the ability to add, update, and delete courses and parts.
- Implement a backend to persist the course data.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
