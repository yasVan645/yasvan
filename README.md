# yasvan.js
This is a simple and basic javascript library for fetching information about developer @_yasvan.

# 🍀Installation <br>
<code>npm i yasvan </code>

# 🧑🏽‍💻Usage
```
//import the package using require
const yasvan = require('yasvan');

//print hello from yasvan
console.log(yasvan.hello());

//output -> Hello there! I\'m yasvan.js version 1.0.0 running on node.js@>=7.8.0

//instanciate a variable for a particular data object
const personal = yasvan.personal; // returns an object function of yasvan.personal

//print yasvan's age
cosnt age = personal.age();
console.log('yasvan's age = ' + age);
//prints { age: 'age', lastUpdate: 'updated date'}
```

<hr>

# Functions
<code>yasvan.js</code>
<br>
<hr>

<code>yasvan.personal</code>
| functions | returns                      |
|-----------|------------------------------|
|  age      |  [ current: 'current age' ]  |
|           |  [ lastUpdate: 'date'     ]  |

<code>yasvan.general</code>
| functions  | returns                            |
|------------|------------------------------------|
|  socials   |  count: 'social account counts'    |
|            |      list: { collection }          |
|  hobbies   |         { collection }             |
| favorites  |    { collection }                  |

<br>
<hr>

# ⚠️Disclaimer <br>
All of the information retrieved from this library is purely with concern of the developer's atterly permissions and conscent, no misinformation or personal info disclosing intended during the development of this package.

<br>
<hr>

# ✅ Todo List

- [ ] Automate library updating
- [x] Add hobbies
- [x] Add favorites
- [x] Add socials
- [ ] Add more fun
- [ ] Simplify usability and flexability
- [ ] Remove deprecated functions. *If available.

<br>
<hr>

# 😸 Made with 😍 and 🍵.

