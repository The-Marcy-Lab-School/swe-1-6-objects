from from_scratch import (
    become_secret_agent,
    car_maker,
    convert_to_matrix,
    cool_greeting,
    get_next_opponent,
    have_birthday,
    list_all_keys,
    list_all_values,
    list_hobbies,
    we_are_not_friends,
)

TEST_SUITE_NAME = "From Scratch Tests"


def printed(capsys):
    return [line for line in capsys.readouterr().out.splitlines() if line.strip()]


def test_cool_greeting():
    """cool_greeting - should return proper greeting based off coolness"""
    cool_person = {
        "name": "Sara",
        "is_cool": True,
        "age": 30,
        "bio": "What a legend",
    }
    not_cool_person = {
        "name": "Bob",
        "is_cool": False,
        "age": 30,
        "bio": "Kind of mean if we're being honest",
    }
    assert cool_greeting(cool_person) == "What is UP SARA? How you been doin'?"
    assert cool_greeting(not_cool_person) == "Greetings Bob, how have you been lately?"


def test_have_birthday():
    """have_birthday - should increment age by 1"""
    person1 = {"name": "Sara", "age": 30}
    person2 = {"name": "Bob", "age": 0}
    person3 = {"name": "Jo", "age": 100}

    have_birthday(person1)
    assert person1["age"] == 31
    have_birthday(person2)
    assert person2["age"] == 1
    have_birthday(person3)
    assert person3["age"] == 101


def test_become_secret_agent():
    """become_secret_agent - should remove name and add spy_handle"""
    person1 = {"name": "Sara", "age": 30}
    person2 = {"name": "Sara", "age": 30}

    become_secret_agent(person1, "007")
    assert person1 == {"spy_handle": "007", "age": 30}

    become_secret_agent(person2, "008")
    assert person2 == {"spy_handle": "008", "age": 30}


def test_car_maker():
    """car_maker - should return a car dictionary"""
    assert car_maker("Civic", "Honda", 2010) == {
        "name": "Civic",
        "maker": "Honda",
        "year": 2010,
        "needs_oil_change": False,
    }
    assert car_maker("Model 3", "Tesla", 2020) == {
        "name": "Model 3",
        "maker": "Tesla",
        "year": 2020,
        "needs_oil_change": False,
    }


def test_we_are_not_friends():
    """we_are_not_friends - should remove last friend from friends list"""
    person1 = {"name": "Sara", "age": 30, "friends": ["Bob", "Joe", "Sally"]}

    assert we_are_not_friends(person1) == "Sally"
    assert person1["friends"] == ["Bob", "Joe"]
    assert we_are_not_friends(person1) == "Joe"
    assert person1["friends"] == ["Bob"]
    assert we_are_not_friends(person1) == "Bob"
    assert person1["friends"] == []

    # an empty list must not raise
    assert we_are_not_friends(person1) is None
    assert person1["friends"] == []


def test_list_hobbies(capsys):
    """list_hobbies - should print all hobbies of a person"""
    person1 = {"name": "Sara", "age": 30, "hobbies": ["hiking", "biking", "skiing"]}
    person2 = {"name": "Jane", "age": 43, "hobbies": ["jogging", "chess", "swimming"]}

    list_hobbies(person1)
    assert printed(capsys) == [
        "Sara likes hiking.",
        "Sara likes biking.",
        "Sara likes skiing.",
    ]

    list_hobbies(person2)
    assert printed(capsys) == [
        "Jane likes jogging.",
        "Jane likes chess.",
        "Jane likes swimming.",
    ]


def test_get_next_opponent():
    """get_next_opponent - should return next opponent"""
    fighters = {
        "name": "Fighters",
        "sport": "basketball",
        "wins": 3,
        "location": {"city": "Bridgeport", "state": "CT"},
        "matches": [
            {"team_name": "Dunkaroos", "skill": 9, "wins": 12},
            {"team_name": "Space Jammers", "skill": 10, "wins": 16},
            {"team_name": "Mustangs", "skill": 6, "wins": 10},
        ],
    }

    assert get_next_opponent(fighters) == "Dunkaroos"
    fighters["matches"].pop(0)
    assert get_next_opponent(fighters) == "Space Jammers"
    fighters["matches"].pop(0)
    assert get_next_opponent(fighters) == "Mustangs"
    fighters["matches"].pop(0)
    assert get_next_opponent(fighters) is None


def test_list_all_keys():
    """list_all_keys - should return all keys of a dictionary"""
    person = {"name": "Sara", "age": 30, "bio": "What a legend"}
    car = {"name": "Civic", "maker": "Honda", "year": 2010}

    assert list_all_keys(person) == ["name", "age", "bio"]
    assert list_all_keys(car) == ["name", "maker", "year"]


def test_list_all_values():
    """list_all_values - should return all values of a dictionary"""
    person = {"name": "Sara", "age": 30, "bio": "What a legend"}
    car = {"name": "Civic", "maker": "Honda", "year": 2010}

    assert list_all_values(person) == ["Sara", 30, "What a legend"]
    assert list_all_values(car) == ["Civic", "Honda", 2010]


def test_convert_to_matrix():
    """convert_to_matrix - returns a matrix whose first row is the keys"""
    users = [
        {"name": "Sara", "age": 30, "bio": "What a legend"},
        {"name": "Bob", "age": 30, "bio": "Kind of mean if we're being honest"},
    ]
    assert convert_to_matrix(users) == [
        ["name", "age", "bio"],
        ["Sara", 30, "What a legend"],
        ["Bob", 30, "Kind of mean if we're being honest"],
    ]

    users.pop()
    assert convert_to_matrix(users) == [
        ["name", "age", "bio"],
        ["Sara", 30, "What a legend"],
    ]

    assert convert_to_matrix([]) == []

    cats = [
        {"name": "Fluffy", "breed": "Persian", "is_a_jerk": True, "is_perfect": True},
        {"name": "Mittens", "breed": "Tabby", "is_a_jerk": True, "is_perfect": True},
        {"name": "Socks", "breed": "Calico", "is_a_jerk": False, "is_perfect": True},
    ]
    assert convert_to_matrix(cats) == [
        ["name", "breed", "is_a_jerk", "is_perfect"],
        ["Fluffy", "Persian", True, True],
        ["Mittens", "Tabby", True, True],
        ["Socks", "Calico", False, True],
    ]
