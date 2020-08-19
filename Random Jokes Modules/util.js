//named export
export function changeButton(array, not)
{
    const item = array[Math.floor(Math.random() * array.length)];
    if (item === not)
    {
        return changeButton(array, not);
    }
    return item;
}