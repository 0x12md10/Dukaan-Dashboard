import { TiArrowSortedDown } from "react-icons/ti";
import { GrAnnounce } from "react-icons/gr";
import Input from "../Input/Input";
function Navbar() {
  return (
    <div className="grid grid-cols-10 py-4 justify-items-strech border-b mb-3">
        <div className="col-span-1 font-semibold text-lg leading-5 flex justify-center items-center justify-self-start">Payouts</div>
        <div className="col-span-3 flex justify-start items-center gap-x-2"><div className="items-center ml-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
        </div><div className=" invisible sm:block sm:visible sm:text-sm">How it works</div></div>

        <div className="col-span-4 justify-self-start"><Input bg={"gray"} placeholder={"Search features, tutorials, etc."}/></div>
        <div className="col-span-2 flex justify-self-end gap-x-4">
            <div className="bg-lightGray rounded-full p-3 flex items-center justify-items-center size-10"><GrAnnounce className=" size-4"/></div>
            <div className="bg-lightGray rounded-full p-2 flex items-center justify-items-center size-10"><TiArrowSortedDown className="size-10"/></div>
        </div>
    </div>
  )
}

export default Navbar