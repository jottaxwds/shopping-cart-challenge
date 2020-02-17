## Initial Approach:

### Structure:
Using create-react-app boilerplate code to avoid starting from the scratch with initial configurations and set-ups.

The approach for the basic structure is to allocate isolated and atomic components without business logic inside `components` folder.
Then, under `containers` folder, more complex views combining components and business logic to provide different parts/sections of the application.
All the logic about the checkout system is under `Checkout` folder. It contains the default discounts & products data to be loaded
This initial data should be taken from backend dynamically, but this assesment only includes the pure frontend and necessary extra's to match the acceptance criterias.

### Styling and components:

Between multiple options that can be used, I decided to build as much atomic and simple components as possible, without any kind of business logic, by using _scss & BEM namming convention_ since we already have base styles provided in .css and we can split them easy for each component.

Styles are splitted into styles for the components, global stuffs, variables to store colours and units to handle proportions in the gaps (margins & paddings) to build a proper layout.

The components under 'components' folder are as much simple as possible. They are easy to maintain, and they can be combined in everyplace.
Also they are tested, that means, they will work as expected if the right inputs are provided and we should take care of the logic of the "container" in which they are going to be placed, not the individual behavior of the components on each container.

The purpose to build that kind of isolated components is to be able to migrate them into a components library or design system in the future without need to decouple them from business logic.

_Styled components_ also could be used and this could be much better since, by doing it in this way, we are ensuring that _other parts of our UI will not be affected by them_. Our styles will not create any side effect in other parts of the application.

### Unit testing:

For the unit testing I decided to use `react-testing-library`. I did not use _Enzyme_ because while Enzyme tests are focused on the implementation, using `react-testing-library` we are focusing on user behavior, what users are going to see and interact with.

## Implementation:

For the checkout class I created a class with all necessary methods and attributes:

- Summary: All the information about the products and their quantities.
- Discounts: All the applicable discounts considering the products we have in the summary
- Totals: Every single total needed for the number of the items in the summary, the total value of the discount, the total value of the price for the summary products and the total price that results from substract the total summary products price from the total available discounts.

2 Main methods are implemented to scan and unScan, allowing us to add items 1 by 1 and removing them in the same way. After each scan/unscan, all relevant information is updated to display it in the proper section of the application.

Context is used across the application to handle the data and dispatch actions that will update the state that we are consuming from the context. This state, is linked to a instance of the checkout class, that means we are going to be able to use the checkout functionality and read every possible value on it from every place we could consume the context in the application.

By using reducers we are ensuring a new state is provided on each dispatched action, so we could be able to trace each action being dispached and track the updates of the state in the meantime in a very clear way.

## BONUS: Details of the product (Modal):
