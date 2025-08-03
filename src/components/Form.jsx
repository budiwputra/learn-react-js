
import {useRef} from 'react'

const Form = ({onSubmit}) => {

const form = useRef(null)

    return (

    <>
    <h1>Form</h1>
    <form
        ref={form}
        onSubmit={(e) => {
        e.preventDefault()
        onSubmit({
            proName : e.target.fieldName.value,
            proAge : e.target.fieldAge.value

        })

        e.target.reset()
    }}>
        <input type="text" name='fieldName' placeholder='Masukkan nama' />
        <input type="text" name='fieldAge' placeholder='Masukkan umur' />
        <button type='submit'>Submit</button>
        <button onClick={() => {
        form.current.reset()
        }} >Clear</button>
    </form>
    </>
    )
}

export default Form