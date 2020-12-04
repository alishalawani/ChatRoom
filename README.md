# React Native Workshop
Through this tutorial, we would be building a simple Chat Room app for both android and ios. We would be covering navigation in React Native, Flexbox, and using various react native APIs. No backend involved, all messages would be stored in state.

## Setting up your development environment
1. With expo globally installed - from the command line run `expo init <NameOFApp>` in this case, `expo init ChatRoom` 
2. using your keyboard arrows to move, from the workflow options shown on the command line, under Managed Workflow, select `blank project`.
3. Change into the new directory we just created `cd ChatRoom`.
4. Create a folder named screens `mkdir screens`, in the root directory. This is were all our screens/views will be.

[Layout in React Native Documentation](https://reactnative.dev/docs/flexbox)

## Create a Welcome view
### Use an image as the background
1. In the screens folder, `touch WelcomeView.js`.
2. Create a functional or class based component, we won't be using hooks on this component.
3. Import the `ImageBackground` element from 'react-native' and render it.
4. This element has a `source` property which is set to the global require function with the path of the image passed in as a string argument. There is an image of your choice or the `background` image in the assets folder of this repo (you can also find the image here [](https://i.imgur.com/5VtFtoh.jpeg)). Note all media files should be in the assets folder.

    Your Welcome view component should look something like this
    ```jsx
    import React from 'react';
    import {ImageBackground } from 'react-native';
    function WelcomeView(props) {
	    return (
		    <ImageBackground source={require('assets/background.jpg')}>
			    {}
		    </ImageBackground>
	    );
    }

    export default WelcomeView;
```jsx

5. To see what we have done so far, let's call the WelcomeView in App.js.
