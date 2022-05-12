# The Accordion

Your mission: Implement an `Accordion` component. 
- Starting point can be found on: `accordion_start.js`
- Final results show below:
- Use: Compound Component pattern, defaultProps, Children API, cloneElement

__accordion_end__
```jsx
const AccordionDemo = () => {
  return (
      <Accordion>
        <Accordion.Tab title={'Item #1'}>
          Some content inside item # 1
        </Accordion.Tab>
        <Accordion.Tab title={'Item #2'}>
          Some content inside item # 2
        </Accordion.Tab>
        <Accordion.Tab title={'Item #2'}>
          Some content inside item # 2
        </Accordion.Tab>
      </Accordion>
  );
};
```
