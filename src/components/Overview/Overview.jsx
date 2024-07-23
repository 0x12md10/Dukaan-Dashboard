import RevenueCard from "../RevenueCard/RevenueCard"

function Overview() {
  return (
    <div className="flex flex-col ">
        <div className="flex flex-row justify-between mb-5">
            <div className="font-semibold text-xl">Overview</div>
            <div className="flex flex-row justify-around border rounded shadow-sm gap-x-2 px-4 py-2 text-gray-700 items-center"><div>This Month</div><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 stroke-black stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg></div></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  '>
            <div className="sm:col-span-1 lg:col-span-1 cursor-pointer"><RevenueCard type="Next Payout" amount="2,312.23" orderCount={23} isPayout={true} dateNTime={"Today, 4:00PM"} /></div>
            <div className="sm:col-span-1 lg:col-span-1 cursor-pointer"><RevenueCard type="Amount Pending" amount="92,312.20" orderCount={13}/></div>
            <div className="sm:col-span-2 lg:col-span-1 cursor-pointer"><RevenueCard type="Amount Processed" amount="23,91,221.20" orderCount={13}/></div>
        </div>
    </div>
  )
}

export default Overview