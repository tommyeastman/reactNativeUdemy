#Setup
to view the app, just go to the right wd in GitBash and run:
```javascript
npm start
```
#General Syntax
Only use single quotes with React and ReactNative

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