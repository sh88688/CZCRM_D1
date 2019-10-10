const fetchCall = async (url, options, type) =>
<<<<<<< HEAD:components/fetchCaller.js
{
  const response = await fetch(url, options);
  switch(type)
  {
    case "text":
      return response.text();
    break;
    case "json":
      return response.json();  
    break; 
    default :
      return response.text();
  }
};
export default fetchCall;
=======
    {
      const response = await fetch(url, options);
      switch(type)
      {
        case "text":
          return response.text();
          
        case "json":
          return response.json();  
          
        default :
        return response.text();
        
      }
    };
    
export {
    fetchCall
};
>>>>>>> 3acc91ab47e06756ca76a5016e3494f61a48b42e:functions/modularFunc.js
