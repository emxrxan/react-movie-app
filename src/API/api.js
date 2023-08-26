export default async function fetchAPI(url){
  try{
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
        }
    }

    const response = await fetch(url, options);
    const result = await response.json();
    return result;

    }catch(error){
        console.log("Something went wrong!");
}
}