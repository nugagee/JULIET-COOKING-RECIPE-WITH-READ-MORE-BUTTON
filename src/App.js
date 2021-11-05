import {useState, useEffect} from 'react';
import Header from "./component/Header/header";
import "../src/asset/css/index.css"
import Body from "./component/body/body";
import Footer from "./component/footer/footer";

function App() {
   const [value , setValue] = useState('')
   const [menu,setMenu] = useState([])
   const [query, setQuery] = useState('chicken')

   const APP_ID = "866501ad";
   const APP_KEY = "56abcbfb61e30a8163010a9a3bb57b02"
   const url =  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  // const getResponse = async() =>{

  //   const response = await fetch(url)
  //   const responseJson = await response.json()
  //   console.log(responseJson)
  //   const data = responseJson.hits
  //   setMenu(data)
  //   console.log(data)
  // }

  useEffect(() =>{
    const getResponse = async() =>{

    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson)
    const data = responseJson.hits
    setMenu(data)
  }
    getResponse()
  },[query, url])

  const valueChange = e => {
    setValue(e.target.value)
    // console.log(value)
  }

  const getSearch = () =>{

    setQuery(value)
    console.log(query)
  }
  return (
    <div className="App">
      <Header value={value} onChange={valueChange} getsearch={getSearch}/>
      <Body menu={menu}/>
      <Footer/>
    </div>
  );
}

export default App;
