import './App.css';
import {useState} from 'react'


// const products = [
//   {title : "apple", isFruit: true, id : 1 },
//   {title : "lichi", isFruit: true, id : 2 },
//   {title : "cucamber", isFruit: false, id : 3 },
//   {title : "banana", isFruit: true, id : 4 }
// ]

const MyButton = ({count, onClick}) => {
 

  return (
    <button onClick={onClick}>
      Clicked {count} me
    </button>
  )
}

// const singer = {
//   name : "Katy Perry",
//   imageUrl : "https://m.media-amazon.com/images/M/MV5BMjE4MDI3NDI2Nl5BMl5BanBnXkFtZTcwNjE5OTQwOA@@._V1_.jpg",
//   size : 190
// }


// function AboutPage () {
//   return (
//     <>
//     <h1>About</h1>
//     <p>Hello there. <br /> How do you do?</p>
//     </>
//   )
// }

function App() {

  // const listItems = products.map(product => 
  //   <li key = {product.id}
  //   style = {{
  //     color : product.isFruit ? "orange" : "red"
  //   }}>
  //     {product.title}
  //   </li>

  // )

  const [count, setCount] = useState(0);
  function handleClick () {
    setCount(count + 1)
  }

  return (
    <div>
      {/* <ul>{listItems}</ul> */}
      <h1>Welcome to my app</h1>
      {/* <h1> {singer.name} </h1>
      <img src={singer.imageUrl}
       alt={singer.name}
       style = {{
        width : singer.size,
        height : singer.size,
       }} /> */}
       <MyButton count = {count} onClick= {handleClick} />
       <MyButton count = {count} onClick= {handleClick} />
    </div>
  );
}

export default App;
