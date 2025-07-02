import logo from './logo.svg';
import './App.css';
import { CiHeart } from "react-icons/ci";

function App() {
  return (
    <body>
      <div className='white'>
        <nav>.......
          <div className='left'>
            <h4> Back to All Plants</h4>
          </div>
          <div className='right'><h1><CiHeart /></h1></div>
        </nav>

        <div className='flex'>
          <div className='one'>
            <img src='https://i.pinimg.com/736x/a2/c1/87/a2c187d2006f669dd4e6bb894b45cf4e.jpg'></img>
          </div>
          <div className='two'>
            <div className='cards'>
              <h1>CLASSIC PEACEFULLY</h1>
              <h5>POPULAR HOUSE PLANT</h5>
              <h2>$18</h2>
              <p>Objective: The objective of this assignment is
                 to familiarize yourself with the file structure of a React.js
                 project created using create-react-app,</p>


                 <div className='flex-1'>
                   <button>Add to Cart</button>
                    <button>WishList</button>
                 </div>
            </div>
          </div>

        </div>
      </div>

    </body>
  );
}

export default App;
