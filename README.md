## Before start:

- Be sure you have Node & NPM installed. You can install last version of Node & NPM using NVM (node version manager) -> https://github.com/nvm-sh/nvm

- Run tests: `yarn test`
- Run dev server: `yarn start`
- Build a production-ready app: `yarn build`

## Initial Approach:

### Structure:

Using create-react-app boilerplate code to avoid starting from the scratch with initial configurations and set-ups.

I avoided to use plain HTML/CSS/vanilla JS because to scale the app will be much more easier by using a frontend framework that could speeds up our progresses and allow us to create and share components and functionalities across the application.

The approach for the basic structure is to allocate isolated and atomic components without business logic inside `components` folder.
Then, under `containers` folder, more complex views combining components and business logic to provide different parts/sections of the application.
All the logic about the checkout system is under `Checkout` folder. It contains the default discounts & products data to be loaded.
This initial data should be taken from backend dynamically, but this assesment only focuses in a frontend implementation. Nevertheless a BFF (Backend for frontend) could be done by using NodeJS and expressJS server to handle all this logic.
_For security & privacy reasons, Checkout class, products and discounts data must be handled in the backend and they must not be handled in the client side._

### Styling and components:

Between multiple options that can be used here, I decided to build as much atomic and simple components as possible without any kind of business logic, by using _SCSS & BEM namming convention_ since we already have base styles provided in `.css` and we can split them very easy for each component.

Provided styles are splitted into separated styles for the components, global things, variables to store colours and units to handle proportions in the gaps (margins & paddings) to build a proper layout with consistency.

The components under 'components' folder are as much simple as possible. They are easy to maintain, easy to scale and they can be used everywhere.
Also they are unit tested, ensuring the behavior of each component is what we expect from them, allowing us just to test the logic in the containers in which this components are going to be used.

The purpose to build that kind of isolated components is to be able to migrate them into a components library or design system in the future without need to decouple them from business logic.

_Styled components_ also could be used and this could be a better choice since we could ensure that _other parts of our UI will not be affected by them_. Our styles will not create any side effect in other parts of the application because styles inside styled components have a limited scope.

### Unit testing:

For the unit testing I decided to use `react-testing-library`. I did not use _Enzyme_ because Enzyme tests are focused on the implementation and `react-testing-library` are focused on users behavior, what users are going to see and interact with.

## Implementation:

For the checkout class I created a class with all necessary methods and attributes:

- Summary: All the information about the products and their quantities.
- Discounts: All the applicable discounts considering the products we have in the summary. The approach is very simple and scalable, each discount contains the products in which discount can be applicable, and implements a function that takes data from product and generates the discount information considering quantities, product code, etc (it keeps the rules for the discount). It will be easy to add more discounts or simply add more items for each discount to be able to apply that discount to them.

- Totals: Every single total needed for the number of the items in the summary, the total value of the discount, the total value of the price for the summary products and the total price that results from substract the total summary products price from the total available discounts.

2 Main methods are implemented to scan and unScan, allowing us to add items 1 by 1 and removing them in the same way. After each scan/unscan, all relevant information is updated to display it in the proper section of the application.

Context is used across the application to handle the data and dispatch actions that will update the state/data we are consuming from the context. This state, is linked to an instance of the checkout class, that means we are going to be able to use the checkout functionality and read every possible value on it from every place we could consume the context in the application.

By using reducers we are ensuring a new state is provided on each dispatched action (inmutability), so we could be able to trace each action being dispached and track the updates of the state in the meantime in a very clear way following functional programming principles.

## BONUS: Details of the product (Modal):

For the Modal, I created a isolated Modal component that will display what is passed as a children in a modal. With this, we can show a Modal and passing it whatever we want.
A product were added to the context state, to set a product when is selected and be able to use it as data to show in the children that is going to be passed to the modal (ProductDetails component).

## Possible improvements:

- Styled components
- BFF (Backend For Frontend) to move all the checkout logic and provide products & discount data to the client side but not being handled in the client side. Also this BFF could handle "what is going to happen" when we CheckOut the products in the shoppingCart.
