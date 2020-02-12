# Initial Approach:

- Structure: Using create-react-app boilerplate code to avoid starting from the scratch with initial configurations and set-ups.

- Styling and components:
  Between multiple options that can be used, I decided to build isolated components (starting in the atomic ones) and also more complex components by using _scss & BEM namming convention_ since we already have base styles provided in .css.

Styled component also could be used and this could be much better since, by doing it in this way, we are ensuring that other parts of our UI will not be affected by them. Our styles will not create any side effect to other parts of the application.

- Unit testing: For the unit testing I decided to use `react-testing-library`. By using _Enzyme_ the tests are focused on the implementation, using `react-testing-library` we are focusing on user behavior, what users are going to see and interact with.
