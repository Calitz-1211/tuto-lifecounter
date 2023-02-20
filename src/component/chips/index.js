import { useState } from 'react'
import './index.css'

export const Chip = (props) => {
    const [isClear, setIsClear] = useState(false)

    const didClick = () => {
        setIsClear(!isClear)
        console.log(isClear)
    }

    return (
        <div className='round' onClick={didClick}>
           <div>
            {isClear?"": props.value}
           </div>
        </div>
    )
}