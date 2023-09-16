***
<details>
<summary style="font-weight: bold; font-size:20px" >Three features of this Project.</summary>

```
1. In this projects, You can easily buy courses.

2. You can't cross 20 hour credit limit.

3. Also You can't add similar course in second time.
```
</details>

***

<details>
<summary style="font-weight: bold; font-size:20px" >How I managed the state in this projects</summary>

```
Basically, In this project, I use three react built-in useState hooks.
Specifically, I used cart, remaining, and totalTime to add data on the shopping cart and credit hours.
Then I set the initial value for the cart of an empty array [],  For remaining I set the default number 20 and finally I set the default number 0 for totalTime.
Now I complete the set and initialize the state variables with their initial values.
Then I declare a function whose name is handelAddToCart. This function will manage state updates based on user actions.
Like showing an Error toast message, or adding the course to the cart.
Then I connect to other components in the main App Component. When I complete all state components, then I display the state data (totalTime, remaining, and cart items) in the user interface.
```
</details>

***
