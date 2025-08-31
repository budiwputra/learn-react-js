import { useRef } from "react"

const LearnForm = ({ onSubmit }) => {
  const refForm = useRef(null)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const data = {
          learnNamaState: e.target.learnNama.value,
          learnUmurState: e.target.learnUmur.value,
        }
        onSubmit(data)
        e.target.reset()
      }}
      ref={refForm}
    >
      <input type="text" name="learnNama" placeholder="Nama" />
      <br />
      <input type="text" name="learnUmur" placeholder="Umur" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default LearnForm
