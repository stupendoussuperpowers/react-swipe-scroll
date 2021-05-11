# Installing

```
npm install --save react-swipe-scroll
```

## Using the React Component

You can use `react-swipe-scroll` as a standalone component with an `itemBuilder`, which renders list items based on a function which takes index as the parameter and returns a JSX component

```
<SwipeList 
  itemBuilder: <function(index) => JSX>
  context: <{
    startIndex: <starting index of list>
  }>
  itemCount: <No of items>
  threshold: <Threshold value of pixel change to increment/decrement index>
/>
```

## Using React Hooks

`react-swipe-scroll` can also be used as a hook, where you can read and update the scroll index of a div. This is done using a `ref`

```
const [ref, index, setIndex] = useSwipeScroll({
  context: <{
    noItems: <no of items to render at one time>
    startIndex: <starting index of list>
  }>,
  itemCount: <No of items>,
  threshold: <Threshold value of pixel change to increment/decrement index>
})


<div ref={ref}>
  {index}
  <button onChange={(e)=> setIndex(index+1)}>Click (or scroll) to increase index!</button>
</div>
```
