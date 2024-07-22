
function RevenueCard({type ,amount, orderCount , isPayout, dateNTime }) {
  return (

    <div className={`flex flex-col  border border-slate-100 shadow-md justify-around rounded-lg`}>
       <div className={`p-5 flex flex-col  gap-y-8 ${isPayout && "bg-blue-500 rounded-t-lg text-white hover:bg-blue-700"} `}> <div className="flex flex-row items-center gap-x-2">
            <div className={`${isPayout ? "text-white" : "text-gray-500" }`}>{type}</div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 stroke-2 ${isPayout ? "text-white" : "text-gray-700 "}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
        </div>
        <div className="flex flex-row justify-between">
            <div className="font-sans text-3xl font-semibold leading-3">&#8377; {amount}</div>
            <div className={`flex flex-row  ${isPayout ? "text-white" : "text-blue-500"}`}>
                <div className="underline font-semibold">{orderCount} Orders</div>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg></div>
            </div>
        </div> </div>
        {
            isPayout  && 
            <div className="flex flex-row justify-between bg-blue-700 text-white pl-5 pr-5 pt-2 pb-2 rounded-b-lg"> 
                <div>Next Payment Date:</div>
                <div>{dateNTime}</div>
            </div>
        }
    </div>


  )
}

export default RevenueCard