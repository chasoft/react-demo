# This demo src

- Remember that.. when you passing a function to component's props, and that function is inline, it would be recreated everytime the current component is rendered.
- As a result, the child component would be re-rendered even it using React.memo() when exporting.