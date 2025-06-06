//!Props de padre a hijo
// const Box = (props) => {
//   return (
//     <>
//       <h1>{props.children}</h1>
//     </>
//   );

//!Porps de hijo a padre
const Box = ({ onSomeEvent,title}) => {
  return (
    <>
      <button onClick={() => onSomeEvent()}>Click on me!</button>
    </>
  );
};

export default Box;
