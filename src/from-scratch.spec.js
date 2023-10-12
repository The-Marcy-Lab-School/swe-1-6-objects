const path = require('path');
const ScoreCounter = require('score-tests');
const {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
} = require('./from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => {});

describe(testSuiteName, () => {
  afterEach(jest.clearAllMocks);

  it('coolGreeting - should return proper greeting based off coolness', () => {
    const coolPerson = {
      name: 'Sara',
      isCool: true,
      age: 30,
      bio: 'What a legend',
    };

    const notCoolPerson = {
      name: 'Bob',
      isCool: false,
      age: 30,
      bio: "Kind of mean if we're being honest",
    };

    expect(coolGreeting(coolPerson)).toEqual("What is UP SARA? How you been doin'?");
    expect(coolGreeting(notCoolPerson)).toEqual('Greetings Bob, how have you been lately?');

    scoreCounter.correct(expect);
  });

  it('haveBirthday - should increment age by 1', () => {
    const age1 = 30;
    const age2 = 0;
    const age3 = 100;
    const person1 = { name: 'Sara', age: age1 };
    const person2 = { name: 'Bob', age: age2 };
    const person3 = { name: 'Jo', age: age3 };

    haveBirthday(person1);
    expect(person1.age).toEqual(age1 + 1);

    haveBirthday(person2);
    expect(person2.age).toEqual(age2 + 1);

    haveBirthday(person3);
    expect(person3.age).toEqual(age3 + 1);

    scoreCounter.correct(expect);
  });

  it('becomeSecretAgent - should remove name and add spyHandle', () => {
    const person1 = {
      name: 'Sara',
      age: 30,
    };

    const person2 = {
      name: 'Sara',
      age: 30,
    };
    becomeSecretAgent(person1, '007');
    expect(person1).toEqual({ spyHandle: '007', age: 30 });

    becomeSecretAgent(person2, '008');
    expect(person2).toEqual({ spyHandle: '008', age: 30 });

    scoreCounter.correct(expect);
  });

  it('carMaker - should return a car object', () => {
    expect(carMaker('Civic', 'Honda', 2010)).toEqual({
      name: 'Civic',
      maker: 'Honda',
      year: 2010,
      needsOilChange: false,
    });

    expect(carMaker('Model 3', 'Tesla', 2020)).toEqual({
      name: 'Model 3',
      maker: 'Tesla',
      year: 2020,
      needsOilChange: false,
    });

    scoreCounter.correct(expect);
  });

  it('weAreNotFriends - should remove last friend from friends array', () => {
    const person1 = {
      name: 'Sara',
      age: 30,
      friends: ['Bob', 'Joe', 'Sally'],
    };

    expect(weAreNotFriends(person1)).toEqual('Sally');
    expect(person1.friends).toEqual(['Bob', 'Joe']);

    expect(weAreNotFriends(person1)).toEqual('Joe');
    expect(person1.friends).toEqual(['Bob']);

    expect(weAreNotFriends(person1)).toEqual('Bob');
    expect(person1.friends).toEqual([]);

    expect(weAreNotFriends(person1)).toEqual(undefined);
    expect(person1.friends).toEqual([]);

    scoreCounter.correct(expect);
  });

  it('listHobbies - should log all hobbies of an object', () => {
    const person1 = {
      name: 'Sara',
      age: 30,
      hobbies: ['hiking', 'biking', 'skiing'],
    };

    const person2 = {
      name: 'Jane',
      age: 43,
      hobbies: ['jogging', 'chess', 'swimming'],
    };

    listHobbies(person1);
    expect(log.mock.calls).toEqual([
      ['Sara likes hiking.'],
      ['Sara likes biking.'],
      ['Sara likes skiing.'],
    ]);
    jest.clearAllMocks();

    listHobbies(person2);
    expect(log.mock.calls).toEqual([
      ['Jane likes jogging.'],
      ['Jane likes chess.'],
      ['Jane likes swimming.'],
    ]);
    jest.clearAllMocks();

    scoreCounter.correct(expect);
  });

  it('getNextOpponent - should return next opponent', () => {
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
      ],
    };

    expect(getNextOpponent(fighters)).toEqual('Dunkaroos');

    fighters.matches.shift();

    expect(getNextOpponent(fighters)).toEqual('Space Jammers');

    fighters.matches.shift();

    expect(getNextOpponent(fighters)).toEqual('Mustangs');

    fighters.matches.shift();

    expect(getNextOpponent(fighters)).toEqual(null);

    scoreCounter.correct(expect);
  });

  it('listAllKeys - should return all keys of an object', () => {
    const person = {
      name: 'Sara',
      age: 30,
      bio: 'What a legend',
    };

    const car = {
      name: 'Civic',
      maker: 'Honda',
      year: 2010,
    };

    expect(listAllKeys(person)).toEqual(['name', 'age', 'bio']);
    expect(listAllKeys(car)).toEqual(['name', 'maker', 'year']);

    scoreCounter.correct(expect);
  });

  it('listAllValues - should return all values of an object', () => {
    const person = {
      name: 'Sara',
      age: 30,
      bio: 'What a legend',
    };

    const car = {
      name: 'Civic',
      maker: 'Honda',
      year: 2010,
    };

    expect(listAllValues(person)).toEqual(['Sara', 30, 'What a legend']);
    expect(listAllValues(car)).toEqual(['Civic', 'Honda', 2010]);

    scoreCounter.correct(expect);
  });

  it('convertToMatrix - should return a matrix of objects where the first nested array is the keys, and all following arrays are the values', () => {
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

    expect(convertToMatrix(users)).toEqual([
      ['name', 'age', 'bio'],
      ['Sara', 30, 'What a legend'],
      ['Bob', 30, "Kind of mean if we're being honest"],
    ]);

    // Even if there's only one object, it should work!
    users.pop();

    expect(convertToMatrix(users)).toEqual([
      ['name', 'age', 'bio'],
      ['Sara', 30, 'What a legend'],
    ]);

    expect(convertToMatrix([])).toEqual([]);

    const cats = [
      {
        name: 'Fluffy',
        breed: 'Persian',
        isAJerk: true,
        isPerfect: true,
      },
      {
        name: 'Mittens',
        breed: 'Tabby',
        isAJerk: true,
        isPerfect: true,
      },
      {
        name: 'Socks',
        breed: 'Calico',
        isAJerk: false,
        isPerfect: true,
      },
    ];

    expect(convertToMatrix(cats)).toEqual([
      ['name', 'breed', 'isAJerk', 'isPerfect'],
      ['Fluffy', 'Persian', true, true],
      ['Mittens', 'Tabby', true, true],
      ['Socks', 'Calico', false, true],
    ]);

    scoreCounter.correct(expect);
  });
  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
