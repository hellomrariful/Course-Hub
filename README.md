***
<details>
<summary style="font-weight: bold; font-size:20px" >Three features of this Project.</summary>

```
1. In this project, You can easily buy courses.

2. You can't cross the 20-hour credit limit.

3. Also You can't add a similar course in second time.
```
</details>

***

<details>
<summary style="font-weight: bold; font-size:20px" >How I managed the state in this projects</summary>

```
Basically, In this projects, I use three react built-in useState hook.
Specifically, I used cart, remaining and totalTime to add data of the shopping cart and credit hours.
Then I set initial value for the cart of an empty array [],  For remaining I set the default number 20 and finally I set default number 0 for totalTime.
Now I complete the set initialized the state variables with their initial values.
Then I declare an function that name is handelAddToCart. This function will manage state updates based on user actions.
Like showing Error toast message, adding course in the cart.
Then I connect to other components in the main App Component.
When I complete all state component, then I showing display the state data (totalTime, remaining, and cart items) in the user interface.
```
</details>

***