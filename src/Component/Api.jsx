
import React, { useEffect, useState } from "react";
import axios from "axios";




function Api() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);


  // Useeffect function allows the user to display the result
  useEffect(() => {
    // axios allows the user to fetch data from the API faster
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data);
        setloading(false);
        console.log(data);
      })
      .catch((error) => {
        // catch fetches any available error from the API then display it to the user
        console.error("Error fetching data:", error);
      });
  }, []);


  if (loading) {
    return <h1>loading....</h1>
  }
  return (
    <>
  
        <div  className=" text-4xl font-semibold text-center my-6">
        <h1 className=" font-serif text-gray-700/80">OUR PRODUCTS</h1>
        </div>
  

   
<hr className=" border-2 border-gray-300/40 " />
        
        <div className=" grid grid-col-2 sm:grid-cols-4 gap-2  ">
        {data.products.map((product) => ( 

          <div className=" border-2  h-[30rem]  my-5 mx-8 justify-center flex rounded-t-2xl" key={product.id}>
          <div className="  h-[29rem] w-[19rem] mx-4 rounded-2xl ">
            
{/* Image */}
          
            <div className="   h-[20rem] w-[19rem] overflow-hidden bg-gray-100/40">
            <img className="h-[21rem] w-[25rem] overflow-hidden" src={product.thumbnail} alt=""/>
            </div>
{/* Text */}
            <div className="  h-[9em] w-[19rem] overflow-hidden rounded-lg my-2 ">
              <span className=" mx-3 text-xl text-red-600 font-semibold">{product.title}</span>
              <p className=" mx-3">${product.price}</p>
              <h4 className=" mx-3">{product.warrantyInformation}</h4>

            </div>

          


          </div>
          </div>
    
        
  ))}
 
          






</div>
    
          
       
      
        
    </>
  );
}
export default Api;