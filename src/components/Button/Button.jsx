import { memo } from "react"

const Button = memo(({type , count , btnHover , setBtnHover})=> {
    return (
        <div onClick={()=>setBtnHover(() => {
            return type === btnHover ? "" : type
        })} className={` py-2 px-5 rounded-full text-gray-500 ${btnHover === type ? "bg-blue-500 text-white" : "bg-lightGray"}` } >{type} ({count})</div>
      )
})


export default Button