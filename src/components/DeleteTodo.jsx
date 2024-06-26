
const DeleteTodo = ({ keyIndex, onUpdate }) => {

    const handleClick = () => {
        const urlString = window.location.href;
        const url = new URL(urlString);
        const user = url.searchParams.get("user");

        const optionDelete = {
            "method": 'POST',
            "headers": {
                'Content-Type': 'application/json',
            }
        }

        fetch(`http://localhost/myapi/my-api.php?user=${user}&action=deletetodo&key=${keyIndex}`, optionDelete)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data.message);
          })
          .catch((error) => {
            console.error("Hubo un problema con la petición:", error);
          });

          onUpdate();
          setTimeout(onUpdate, 50);
    }

    return(
        <button 
            type="button" 
            onClick={handleClick}
            className=" z-20 bg-transparent text-slate-500 ml-5 h-12 w-12 rounded-r-full hover:bg-red-700 hover:text-slate-300 transition-colors">X
        </button>
    )
}

export default DeleteTodo;