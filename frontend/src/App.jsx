import './App.css'
import { API_URL } from './config';
import { useEffect, useState } from 'react';
const url = `${API_URL}`;
function App() {
  const [usersDatas, setUsersDatas] = useState([]);
  useEffect(() => {
    getMenuData();
  },[])

  async function getMenuData() {
    try {
      const menuurl = `${url}/menus`;
        const response = await fetch(menuurl);

        const result = await response.json();

        console.log(result);

        setUsersDatas(result.data);

    } catch (error) {
        console.error(error);
    }
}
  //console.log(usersData);
  return (
    <div className='flex container mx-auto'>
      <div className='flex-8 text-white md:w-32 lg:w-48 border h-screen'>
        {
            usersDatas.map((data, index) => (
                <div key={data._id}>
                  <img
                src={`${url}/uploads/${data.image}`}
                alt={data.name}
                width="150"
                height="120"
            />
                    <h3>{data.name}</h3>
                    <p>Category: {data.category}</p>
                    <p>Subcategory: {data.subcategory}</p>
                    <p>Food Type: {data.foodType}</p>
                    <p>Price: ₹{data.price}</p>
                </div>
            ))
        }
      </div>
      <div className='flex-4 text-white md:w-32 lg:w-48 border h-screen'>sdfdsfsd</div>
    </div>
  )
}

export default App
