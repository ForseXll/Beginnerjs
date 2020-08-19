const endPoint = `https://api.exchangeratesapi.io/latest`;


export async function getData(base = 'USD')
{
    const response = await fetch(`${endPoint}?base=${base}`);
    const data = await response.json();
    //console.log(data);
    return data;
}