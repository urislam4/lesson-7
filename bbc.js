const todos = document.querySelector(".todos");




async function getDate () {
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/posts")
        const todoList = await result.json()

        todoList.forEach((item) => {
            const todo = document.createElement("div")
            todo.innerHTML = `
            <div>
            <p class="black">${item.title}</p>
            <img src="amd/_104883265_de06.jpg" alt="">
            </div>
            `
            todo.style = `
            width: 250px;
            height: 250px;
            display: flex;
            justify-content: center;
            align-item: center;
            border: 3px solid red;
            border-radius: 10%;
            margin-bottom: 20px ;
            `
         todos.append(todo)

        })
       
    }catch(e){
        console.log("404")
    }
}
getDate()