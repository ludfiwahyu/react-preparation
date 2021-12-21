import './TodoList.css'

const TodoList = (props) => {
    console.log(props)
    return (
        <ul>{
            props.dataTodos.map((el) => {
                return <li key={el.id}>{ el.title }</li>
            })
        }
        </ul>
    )
}

export default TodoList