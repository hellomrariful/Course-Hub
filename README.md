<details>
<summary style="font-weight: bold; font-size:20px">Three features of this Project.</summary>

1. In this project, you can easily buy courses.
2. You can't cross the 20-hour credit limit.
3. Also, you can't add a similar course for the second time.

</details>

<details>
<summary style="font-weight: bold; font-size:20px">How I managed the state in this project.</summary>

Basically, in this project, I used four React built-in `useState` hooks to manage component-level state. Specifically, I used state variables like `cart`, `remaining`, `totalTime`, and `courses`.

- I set the initial value for `cart` as an empty array `[]`.
- For `remaining`, I set the default value to 20.
- For `totalTime`, I set the default value 0.
- Finally, I also set the default value for `totalTime` to an empty array `[]`.

Now, let me explain how I managed the state:

- Firstly I fetch the data using useEffect to display the API data.
- I declared a function named `handelAddToCart`. This function handles state updates based on user actions, such as displaying error toast messages and adding courses to the cart.
- I connected this function to other components within the main `App` component.

After setting up all the state components, I displayed the state data (`totalTime`, `remaining`, `cart`, and `courses`) in the user interface.

</details>