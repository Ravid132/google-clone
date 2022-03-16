import React from 'react';
import ReactDOM from 'react-dom';
// export const Footer = () => {
//   return (
//     <div className='text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200'>
//       <h1>Coffeerights 2021</h1>
//     </div>
//   );
// };

function Footer(props) {
  if (!props.warn) {
    return null;
  }

  return <div>Warning!</div>;
}

ReactDOM.render(<Footer warn />, document.getElementById('containertest'));
