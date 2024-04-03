# React + Redux

I took the stopwatch jsx template provided and converted it to typescript (tsx) and implemented the redux part via the `createSlice` provided by the &nbsp; __[redux-toolkit](https://redux-toolkit.js.org/)__ &nbsp;&nbsp; __[npm module](https://www.npmjs.com/package/@reduxjs/toolkit)__

## Program Flow
`index.html` - create root node & load main.tsx

`main.tsx` - load store and wrap app in a provider for that store<br>
The store loaded in this step is created via the redux-toolkit __[`configureStore`](https://redux-toolkit.js.org/api/configureStore)__ hiding the bag of functions like: createStore, compose, applyMiddleware, and combineReducers.

`stopwatchSlice.ts` - Defines the __[slice](https://redux-toolkit.js.org/api/createslice)__ I will use.  This is a slice of the overall global redux store and contains within it the actions and reducers that are needed to interact with the state we will be managing in this application.

`App.tsx` - Create and render the `Stopwatch` component (yes that's it)

`Stopwatch.tsx` - Grab state via `useSelector` and use this state instead of `useState`.  Grab a dispatcher via `useDispatch()` for updating state.



