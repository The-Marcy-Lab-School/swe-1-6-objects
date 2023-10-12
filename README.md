# Assignment 1.1.2 - Objects

- [Assignment 1.1.2 - Objects](#assignment-112---objects)
  - [Before you start](#before-you-start)
- [Question 1 - coolGreeting()](#question-1---coolgreeting)
- [Question 2 - haveBirthday()](#question-2---havebirthday)
- [Question 3 - becomeSecretAgent()](#question-3---becomesecretagent)
- [Question 4 - carMaker()](#question-4---carmaker)
- [Question 5 - weAreNotFriends()](#question-5---wearenotfriends)
- [Question 6 - listHobbies()](#question-6---listhobbies)
- [Question 7 - getNextOpponent()](#question-7---getnextopponent)
- [Question 8 - listAllKeys()](#question-8---listallkeys)
- [Question 9 - listAllValues()](#question-9---listallvalues)
- [Question 10 - convertToMatrix()](#question-10---converttomatrix)
- [Short Answers](#short-answers)

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

# Question 6 - listHobbies()
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

# Question 7 - getNextOpponent()
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

# Question 8 - listAllKeys()
Write a function `listAllKeys()` that takes in an object. The function should return an array of all the keys on that object. There's a built in method to do this, do you know it?

# Question 9 - listAllValues()
Write a function `listAllValues()` that takes in an object. The function should return an array of all the *values* on that object. You can do this a few ways, but just like the above there's a method just for this. Look it up!

# Question 10 - convertToMatrix()
Write a function `convertToMatrix()` that takes in an array of objects. There can be any number of objects in the array (0 is possible), but each object will *always have* the exact same keys as each other. What we want to do is create a matrix version of this data. Remember, a matrix is an array of arrays. In this case, the first child array will be just the keys of the objects, and the rest of the arrays will be the values of the objects. So if we have this array of `user` objects:

```js
const users = [
  {
    name: 'Sara',
    age: 30,
    bio: 'What a legend',
  },
  {
    name: 'Bob',
    age: 30,
    bio: "Kind of mean if we're being honest",
  },
];
```

We would expect the output matrix to look like this:

```js
[
  ['name', 'age', 'bio'],
  ['Sara', 30, 'What a legend'],
  ['Bob', 30, "Kind of mean if we're being honest"],
]
```
Now, if we feed nothing in, expect nothing back:

```js
convertToMatrix([]);
// returns []
```

Check the tests for more specifics. This is a tricky question that relies on understanding object iteration. Think it through!

# Short Answers
These are really important ones, please attempt all of them! And make sure you watch the video explaining what JSON is in question 4!