#Setup
to view the app, just go to the right wd in GitBash and run:
```javascript
npm start
```
#General Syntax
Only use single quotes with React and ReactNative
whenever you reference a JS variable within JSX, wrap it in {}

#Printing to screen
"import" keyword introduced in ES6.
React is used to instruct components how to behave and interact with each other
ReactNative is used to display components on the screen and build default core components
block statement is unnecessary with this arrow function so will shorthand it.
original:
```javascript
const App = () => {
  return (
    <Text>Some Text.</Text>
  );
};
```
modified:
```javascript
const App = () =>  ( <Text>Some Text.</Text> );
```
Bare minimum needed to print to screen:
```javascript
import React from 'react';
import { Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <Text>Some text.</Text>
    );
  }
}
```
#Components
Whenever we want to place some content onto the screen of our mobile device, we will do so by creating a component. A component is an object that produces something (text,shape,etc.) that can be rendered onto the screen of our mobile devices.
JSX is just JS disguised as HTML to make it easier for developers. Babel is a tool that takes JSX and turns it into normal JS.
[babeljs.io]
So a component is a JS function which returns some amount of JSX.

#Importing local files
if installed from an npm module just write name of module.
```javascript
import React from 'react';
```
If importing from local file, need to specify the path.
This is because all of the npm modules have unique names, while all of the local files may not.
'./' gives you current directory.
```javascript
import Header from './src/components/header';
```
#Nesting Components
to render one component inside of another, just treat the imported component as another JSX tag. i.e. for the Header component:
```javascript
<Header></Header>
```
However, any self-closing tag should be written as:
```javascript
<Header />
```
#Styling
All styling is placed within each component file.
Styling - JS objects which have certain property which sets the size, height, color, etc.
Will look like CSS rules, but no CSS.
Many of the properties are named the same, but with camelCase instead of dash-case.
i.e. instead of
```CSS
font-size
```
use
```javascript
fontSize
```
to bring style into a component use:
```javascript
<Text style={textStyle}></Text>
```
the following is referred to as a prop which is short for property:
```javascript
style={textStyle}
```
The View tag is the equivalent of div.

By using destructuring, remove duplicate references to the styles object.

```javascript
const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    );
```
Alternative is:

```javascript
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Albums</Text>
        </View>
    );
```
justifyContent - vertical position
alignItems - horizontal position
these take values of:
flex-start: default (top/left)
center
flex:end: bottom/right

Much more common in RN than React.js to have components whose sole purpose is styling.
In React you have the benefit of separate CSS sheets, where in RN you don't.

use shadow to make components appear like they're coming off the screen.

#Props
Whenever we pass data from a parent component to a child component, we use the props system.
props is a JS object for which you can define different properties.
These props properties are basically variables.

In the parent file, we specify the props property name. Here it's headerText.
We also specify the value we want. Here it's 'Here we go'.
```javascript
<Header headerText={'Here we go'} />
```
In the child file, we pass props into the component.
```javascript
const Header = (props) => {}
```
When we want to reference the props property we use:
```javascript
<Text style={textStyle}>{props.headerText}</Text>
```
#Sourcing Data
want to fetch data and show to user once loaded.
need to make an AJAX/HTTP request from the mobile app to fetch the list of data.
once have the data, need to build a list of the albums.

#Components cont.
for any component we create, we must return a single, top level JSX tag.
Can't return 2 siblings at one time, i.e. can't do
```javascript
return (
    <Header headerText={'Here we go'} />
    <albumList />
);
```
this would be equivalent to
```javascript
return 1;
return 2;
```
instead need to use
```javascript
return (
  <View>
    <Header headerText={'Here we go'} />
    <albumList />
  </View>
);
```
#Class-based components
everything we've made so far are functional components- functions which return some JSX to be displayed on the device.
to fetch data, need to use a class-based component.
Also use a class-based component if you have a large component which may require some helper methods.

function-based component
```javascript
const myComponent = () => {
    return(something);
};
```
class-based component
```javascript
class MyComponent extends Component {
    render() {
        return (something);
    }
}
```
**Classes need to be capitalized!!**

##Lifecycle Methods
Only available to class-based components
lifecycle methods - functions we will place on our class which will be automatically called at some point
componentWillMount() will automatically be called anytime a component is about to be rendered to the screen

#HTTP Requests
Use Axios library, better than native .fetch()
[https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5]
axios.get() is an http request which returns a promise.
use promise to get a notification that http request is complete.
function we pass to .then will be called once the http request is complete

HTTP requests are inherently asynchronous, meaning it takes some amount of time to complete that network request.

#Component state
State is how React handles changing the content that is shown on the screen.
Anytime we change the state of a component, the component will automatically re-render itself to the device's screen.
Only use state with class components.
We have 2 states of our albums list - empty and full of data.
Setting up our list to update from the HTTP request takes 3 steps:
1. set default or initial state for component
add class-level property of state
set albums piece of state to an empty array
```javascript
class AlbumList extends React.Component {
    state = { albums: [] };
```
whenever our component is created, it will now have a property called this.state that will be empty.
2. when we fetch our data, tell our component state to update
```javascript
axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
```
3. make sure that component makes use of the state
```javascript
render() {
    console.log(this.state);
```
use props when we want to communicate from a parent component to a child component
use state for component's internal record keeping

#Passing Components as props
anytime we pass a component we write another component,
that component will show up on the props object as props.children.