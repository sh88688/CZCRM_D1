const fetchCall = async (url, options, type) =>
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