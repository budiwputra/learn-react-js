import { useState, useEffect } from "react"
import LearnForm from "./LearnForm"

const Learn = () => {
  const [learnFrom, setLearnForm] = useState([])

  const learnAddForm = (data) => {
    setLearnForm([data, ...learnFrom])
  }

    useEffect(() => {
    console.log("Data terbaru:", learnFrom)
  }, [learnFrom]) // jalan setiap learnFrom berubah

  

  return (
    <>
      <h1>Form Array</h1>
      <LearnForm onSubmit={learnAddForm} />
      
      {learnFrom.map((item, index) => (
        <p key={index}>
          Nama: {item.learnNamaState}, Umur: {item.learnUmurState}
        </p>
      ))}
    </>
  )
}

export default Learn
