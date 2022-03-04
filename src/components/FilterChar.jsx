import {useState} from "react"
import { debounce } from "lodash"
const FilterChar = ({search}) => {
    const [query, setQuery] = useState("")
    const handlerEvent = debounce((value) => {
        setQuery(value)
        search(value)
        //child send back value, value is that what i have in INPUT
    }, 500)
    return (
        <div className="search">
            <input type="text" onChange={(e) => handlerEvent(e.target.value)}/>
        </div>
    )
}
export default FilterChar

// <input type="text" value={query} onChange={(e) => handlerEvent(e.target.value)}/> we do not need value with debounce