
const DeleteTodo = ({ keyIndex }) => {

    const handleClick = () => {
        const urlString = window.location.href;
        const url = new URL(urlString);
        const user = url.searchParams.get("user");

        const optionDelete = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          };

        fetch(`http://localhost/myapi/my-api.php?user=${user}&action=deletetodo&key=${keyIndex}`, optionDelete)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return(
        <button 
            type="button" 
            onClick={handleClick}
            className="bg-transparent text-slate-500 ml-5 h-12 w-12 rounded-r-full hover:bg-red-700 hover:text-slate-300 transition-colors hover:border-4 hover:border-black">X
        </button>
    )
}

export default DeleteTodo;