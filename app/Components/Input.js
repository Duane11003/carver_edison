import React, {useState} from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

function Input () {
    const [input, setInput] = useState('')
    const [value, setValue] = useState(1)
    const [savings, setSavings] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [error, setError] = useState(false)
    const [inputError, setInputError] = useState(false)

    const handleChange = currentValue => {
        if (!input) setError(true)
        if (input.match(/^[A-Za-z]+$/)) setInputError(true)


        setValue(currentValue)
        newExpense()
        newSavings()
    }

    const newExpense = () => {
        const finalExpense = (input/12) * (value * .01)
        setExpenses(Math.floor(finalExpense))
    }

    const newSavings = () => {
        const slider = value * .01
        const finalSavings = (input/12) * (1-slider)
        setSavings(Math.floor(finalSavings))
    }

    {if (error === true) {
        return (
            <div>
              <p>Input is required</p>
              <button
                className='btn'
                onClick={() => setError(false)}
               >Reset
              </button>
            </div>
        )
    }
    }

   {if (inputError === true) {
        return (
            <div>
                <p>Input must be integers</p>
                <button
                className='btn'
                onClick={() => setInputError(false)}
               >Reset
              </button>
            </div>
        )
   }}

    return (

        
        <div className='input_container'>

            <Slider 
             min={1}
             max={30}
             value={value}
             onChange={handleChange}
            />

            <form>
             <label>Salary $:</label>
             <input
              type='text'
              pattern="[0-9]*"
              placeholder='Input Salary...'
              autoComplete='off'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              >
             </input>
            </form>

            <p>Your Expenses: ${expenses}</p>
            <p><span>Your Savings:</span> ${savings}</p>
        </div>
    )
}

export default Input