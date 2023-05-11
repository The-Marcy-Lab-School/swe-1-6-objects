# Assignment 1.1.2 - Objects

- [Assignment 1.1.2 - Objects](#assignment-112---objects)
  - [Before you start](#before-you-start)
- [Question 1 - coolGreeting()](#question-1---coolgreeting)
- [Question 2 - haveBirthday()](#question-2---havebirthday)
- [Question 3 - becomeSecretAgent()](#question-3---becomesecretagent)
- [Question 4 - carMaker()](#question-4---carmaker)
- [Question 5 - weAreNotFriends()](#question-5---wearenotfriends)
- [Question 6 - logAllKeys()](#question-6---logallkeys)
- [Question 7 - listHobbies()](#question-7---listhobbies)
- [Question 8 - getNextOpponent()](#question-8---getnextopponent)

## Before you start
There are some helpful images in `ref-examples/` again. Also, now that we have objects, we have to be careful with arguments. Are we passing in *individual* properties, or objects? And if we're passing in objects, is it a pure function that does not mutate, or a function that specifically alters the given object?

We aren't going to tell you which functions are pure this time, you have to check what the tests expect. Be careful and good luck!

# Question 1 - coolGreeting()
Write a function `coolGreeting()` that takes a single argument: an object `person`. The `person` object will look like:

```js
{
  name: 'Sara',
  bio: 'Too cool 4 skool.',
  age: 32,
  isCool: true
}
```

If `isCool` is true, then the function returns the string: "What is UP [UPPERCASED-NAME]? How you been doin'?", otherwise it returns the string "Greetings [name as entered], how have you been lately?"

# Question 2 - haveBirthday()
Write a function `haveBirthday()` that takes in an object `person`. It should increase their `age` property by one. The function returns nothing.

Hint: *Be careful with destructuring when modifying object properties*.

# Question 3 - becomeSecretAgent()
Write a function `becomeSecretAgent()` that takes 2 arguments: an object `person` and a string `spyHandle`. `becomeSecretAgent()` should delete the `name` property from `person` and add the `spyHandle` value as a property with the same name.

# Question 4 - carMaker()
Write a function `carMaker` that takes 3 arguments: a string `name`, a string `maker`, and a number `year`. The function should return an object with 4 properties: `name`, `year`, `maker`, and a boolean `needsOilChange`. `needsOilChange` defaults to `false`.

# Question 5 - weAreNotFriends()
Write a function `weAreNotFriends()` that takes in a single `person` object. This function should permanently remove the *last* name from the `person.friends` array (an array of strings), *and* return this value.

# Question 6 - logAllKeys()
Write a function `logAllKeys()` that takes an object `genericObject`. The function should log out whatever top level properties exist on this object one at a time.

```js
logAllKeys({ description: 'Hot', temp: 92, unit: 'C' })
// Logs:
// description
// temp
// unit
```

# Question 7 - listHobbies()
Write a function `listHobbies()` that takes in an object `person`. The `person` is shaped like:

```js
const jo = {
  name: 'Jo',
  age: 34,
  hobbies: ['running', 'biking', 'baking'],
};
```
The function should log out a statement like this for each hobby:

```js
listHobbies(jo);
// logs:
// Jo likes running.
// Jo likes biking.
// Jo likes baking.
```

# Question 8 - getNextOpponent()
Write a function `getNextOpponent()` that takes in an object `team`. The `team` object is complex and shaped like:

```js
const fighters = {
  name: 'Fighters',
  sport: 'basketball',
  wins: 3,
  location: {
    city: 'Bridgeport',
    state: 'CT',
  },
  matches: [
    {
      teamName: 'Dunkaroos',
      skill: 9,
      wins: 12,
    },
    {
      teamName: 'Space Jammers',
      skill: 10,
      wins: 16,
    },
    {
      teamName: 'Mustangs',
      skill: 6,
      wins: 10,
    },
  ]
}
```

`getNextOpponent()` should return the `teamName` of the first opponent in `matches`. It should only return the name, and not modify the array. If there *is* no team in the array (there will always be an array), return `null`.

```js
getNextOpponent(fighters);
// returns 'Dunkaroos'
```
