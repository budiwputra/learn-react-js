import { useNavigate, useLocation } from "react-router"

import '../css/style.css'

const Container = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location)

    const listButton = [
        {
            label : 'Home',
            page : '/'
        },
        {
            label : 'Detail',
            page : '/detail'
        },
        {
            label : 'TodoList',
            page : '/todolist'
        },
        {
            label : 'TaskList',
            page : '/tasklist'

        },
        {
            label : 'Sleep',
            page : '/sleep'
        }
    ]

    return (
        <div>
            <div>
                {listButton.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            navigate(item.page)
                        }}
                        // style={
                        //     location.pathname === item.page? 
                        //     {backgroundColor: 'yellow'} : {}}
                        className={location.pathname === item.page ? 'button-active' : ''}                       
                    >{item.label}</button>
                ))}
            </div>
            {children}
        </div>
    )
}

export default Container