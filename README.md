# Dictionaries

Practice storing related data together in dictionaries, reading it back out,
and changing it.

**Practicing:** dictionaries, nested data, keys and values

- [AI Use on This Assignment](#ai-use-on-this-assignment)
- [Setup](#setup)
- [Before You Start](#before-you-start)
- [From Scratch](#from-scratch)
  - [Question 1: `cool_greeting`](#question-1-cool_greeting)
  - [Question 2: `have_birthday`](#question-2-have_birthday)
  - [Question 3: `become_secret_agent`](#question-3-become_secret_agent)
  - [Question 4: `car_maker`](#question-4-car_maker)
  - [Question 5: `we_are_not_friends`](#question-5-we_are_not_friends)
  - [Question 6: `list_hobbies`](#question-6-list_hobbies)
  - [Question 7: `get_next_opponent`](#question-7-get_next_opponent)
  - [Question 8: `list_all_keys`](#question-8-list_all_keys)
  - [Question 9: `list_all_values`](#question-9-list_all_values)
  - [Question 10: `convert_to_matrix`](#question-10-convert_to_matrix)
- [Submitting](#submitting)
- [Good luck!](#good-luck)

## AI Use on This Assignment

Use whichever mode matches where you are with this material. Both are fine,
and most people move between them as a concept clicks.

**Tutor mode.** The AI explains, questions, quizzes, and critiques, and you
write every line you submit. For this assignment that means asking it how to
reach a value nested two levels deep, or having it quiz you until you can
predict what your own code will do. Ask it a hundred questions — that is the
whole point. What you do not do is ask it for the function. Paste this at the
start of a chat and it will hold for the rest of the conversation:

> You are acting as a tutor. Your job is to explain what this coding question
> is asking, clarify confusing wording, and highlight the relevant concepts I
> need to know — but do not provide the full solution or code that directly
> answers the question. Instead, rephrase the problem in simpler terms,
> identify what is being tested, and suggest what steps or thought processes
> might help. Ask me guiding questions to make sure I am thinking critically.
> Do not write the final function, algorithm, or code implementation.

**Implementer mode.** You write a specification first, the AI writes code from
it, and then you verify that code line by line. For this assignment your spec
must name every key each function reads or writes, and say whether it changes
the dictionary or returns a new one. If what comes back does more than you
asked for, reject it — over-delivery is a defect, and catching it is part of
the job.

You own every line either way, and you will be asked to explain it.

## Setup

Work in `development/mod-1`. Make a draft branch before you start.

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
git checkout -b draft
```

Run `pytest` for everything, or `pytest -k car_maker` for one question. Scores
land in `scores/scores.json`.

75% of tests passing counts as complete. Submit at that point even if it is
not perfect. Treat submitting as a checkpoint rather than a finish line, and
come back to improve it.

## Before You Start

A **dictionary** stores values under names you choose, called **keys**. A
list is a good fit for many similar things. A dictionary is a good fit for one
thing with several pieces of data attached.

```python
person = {"name": "Sara", "age": 30}

person["name"]          # "Sara"
person["age"] = 31      # change a value
person["bio"] = "Hi"    # add a new key
del person["age"]       # remove one
```

Keys here are strings, so you reach a value with `person["name"]`, in square
brackets and in quotes. A missing key raises a `KeyError` rather than quietly
giving you nothing, which is usually a kindness.

Dictionaries are **mutable**, like lists. A function that changes one changes
it for everybody holding it. Some of these questions want exactly that, and
they say so.

## From Scratch

Write your solutions in `src/from_scratch.py`.

### Question 1: `cool_greeting`

Write a function `cool_greeting` that takes a `person` dictionary and returns
a greeting that depends on the `is_cool` key.

```python
cool_greeting({"name": "Sara", "is_cool": True})
# "What is UP SARA? How you been doin'?"

cool_greeting({"name": "Bob", "is_cool": False})
# "Greetings Bob, how have you been lately?"
```

Note the cool version shouts the name. There is a
[string method](https://www.w3schools.com/python/python_ref_string.asp) for
that, and you can call it right inside an f-string.

### Question 2: `have_birthday`

Write a function `have_birthday` that takes a `person` dictionary and adds one
to their `age`. It changes the dictionary in place and returns nothing.

### Question 3: `become_secret_agent`

Write a function `become_secret_agent` that takes a `person` dictionary and a
`spy_handle` string. It removes the `name` key entirely and adds a
`spy_handle` key. It changes the dictionary in place.

```python
person = {"name": "Sara", "age": 30}
become_secret_agent(person, "007")
print(person)   # {"age": 30, "spy_handle": "007"}
```

No trace of the old name can be left. Look up how to delete a key rather than
just blanking it out.

### Question 4: `car_maker`

Write a function `car_maker` that takes a `name`, a `maker`, and a `year`, and
returns a **new** car dictionary. Every car starts with `needs_oil_change` set
to `False`.

```python
car_maker("Civic", "Honda", 2010)
# {"name": "Civic", "maker": "Honda", "year": 2010, "needs_oil_change": False}
```

### Question 5: `we_are_not_friends`

Write a function `we_are_not_friends` that takes a `person` dictionary,
removes the **last** name from their `friends` list, and returns it.

```python
person = {"name": "Sara", "friends": ["Bob", "Joe", "Sally"]}
we_are_not_friends(person)   # "Sally"
print(person["friends"])     # ["Bob", "Joe"]
```

Careful with the empty case. A list method will do most of this for you, but
it raises an error on an empty list, and the tests expect `None` instead.
Food for thought.

### Question 6: `list_hobbies`

Write a function `list_hobbies` that takes a `person` dictionary and prints a
line for each of their hobbies.

```text
Sara likes hiking.
Sara likes biking.
Sara likes skiing.
```

This one prints rather than returns. The punctuation has to match exactly.

### Question 7: `get_next_opponent`

Write a function `get_next_opponent` that takes a `team` dictionary and
returns the `team_name` of the first match in its `matches` list. If there are
no matches left, return `None`.

```python
get_next_opponent(fighters)   # "Dunkaroos"
```

The value you want is nested: a dictionary, holding a list, holding more
dictionaries. Take it one step at a time and print as you go.

### Question 8: `list_all_keys`

Write a function `list_all_keys` that takes any dictionary and returns a list
of its keys.

```python
list_all_keys({"name": "Sara", "age": 30})   # ["name", "age"]
```

Dictionaries have a method for this, but it does not hand you a list directly.
HmmmmMMMMmmm?

### Question 9: `list_all_values`

Write a function `list_all_values` that takes any dictionary and returns a
list of its values.

```python
list_all_values({"name": "Sara", "age": 30})   # ["Sara", 30]
```

### Question 10: `convert_to_matrix`

Write a function `convert_to_matrix` that takes a list of dictionaries that
all share the same keys, and returns a **matrix**. A matrix here is a list of
lists: the first row holds the keys, and every row after it holds one
record's values.

```python
convert_to_matrix([
    {"name": "Sara", "age": 30},
    {"name": "Bob", "age": 30},
])
# [["name", "age"], ["Sara", 30], ["Bob", 30]]

convert_to_matrix([])   # []
```

This is how a spreadsheet is laid out, and it is what a CSV file looks like
underneath. You've barely started Marcy and you're already reshaping data.

## Submitting

```sh
git add -A
git commit -m "your message"
git push
```

Open a pull request to your instructor for feedback.

## Good luck!

Dictionaries are how most real data arrives, so this one pays off quickly.
You got this!
