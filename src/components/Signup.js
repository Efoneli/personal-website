// export default function Signup() {
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert('Submtting!!');
//       }}>
//         <input />
//         <button>Send</button>
//       </form>
//     )
//   }


//  export default function LightSwitch() {
//     function handleClick() {
//       let bodyStyle = document.body.style;
//       if (bodyStyle.backgroundColor === 'black') {
//         bodyStyle.backgroundColor = 'white';
//       } else {
//         bodyStyle.backgroundColor = 'black';
//       }
//     }
  
//     return (
//       <button onClick={handleClick}>
//         Toggle the lights
//       </button>
//     );
//   }
  

// export default function ColorSwitch({
//     onChangeColor
//   }) {
//     return (
//       <button onClick={e => {
//         e.stopPropagation();
//         onChangeColor();
//       }}>
//         Change color
//       </button>
//     );
//   }

import { useState } from 'react'
import { sculptureList } from '../data'

export default function Gallery() {

    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    function handleNextClick() {
        setIndex(index + 1)
    }

    function handlePreviousClick() {
        setIndex(index - 1)
    }

    function handleMoreClick() {
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleNextClick}>
            Next
            </button>
            <button onClick={handlePreviousClick}>
            Previous
            </button>
            <h2>
                <i> {sculpture.name} </i> by {sculpture.artist}
            </h2>
            <h3>({index +  1} of {sculptureList.length})</h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'show'} details
            </button>
            <img src={sculpture.url} alt={sculpture.alt} />
            {showMore && <p>
                {sculpture.description}
            </p>}
            
        </>
    )
}