import { useState } from "react"

const TaskList = () => {

    const [input, setInput] = useState('')

    const [priority, setPriority] = useState('')

    const [saveInput, setSaveInput] = useState('')

    const [savePriority, setSavePriority] = useState('')

    const renderInput = () => {

    if (saveInput === '') {
        if (input === '') {
            return 'Kosong'
        } else {
            return 'Typing...'
        }
        } else {
            return saveInput

        }}

    return (
        <div>        
        <h1>Input</h1>
        <input value={input} type="text" placeholder='Task name' onChange={(e) => {
        setInput(e.target.value)
        console.log('input onChange', e.target.value)
        }} />
        <input value={priority} type="text" placeholder='Priority' onChange={(e) => {
        setPriority(e.target.value)
        }} />
        <button onClick={() => {
        setInput('')
        saveInput('')        
        }}
        disabled={input === ''}
        >Clear</button>
        
        <button onClick={() => {  
        setSaveInput(input)
        setInput('')
        setSavePriority(priority)
        setPriority('')
        }}
        disabled={input === ''}
        >Submit</button>
        <p>{renderInput()}  {savePriority}</p>
        </div>
    )
}

export default TaskList