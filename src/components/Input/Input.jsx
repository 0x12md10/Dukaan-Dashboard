
function Input({placeholder,bg}) {
  return (
    <div className={` flex flex-row gap-x-2 items-center ${bg === "gray" ? "bg-lightGray py-2 px-4" : "bg-white border py-2 px-5 w-1/2 lg:w-1/4"}  rounded-md`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 stroke-slate-500 stroke-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg><input className={`${bg === "gray" ? "bg-lightGray" : "bg-white"} w-full outline-none text-slate-500`} type="text" placeholder={placeholder} /></div>
  )
}

export default Input