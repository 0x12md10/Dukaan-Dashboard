import { useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input";
import Table from "../Table/Table";


function Transactions() {

    const [btnHover , setBtnHover] = useState();

  return (
    <div className="mt-5">
        <div className="font-semibold text-xl">Transactions | This Month</div>
        <div className="flex flex-row justify-start gap-x-5 mt-5 ">
            <Button btnHover={btnHover} setBtnHover={setBtnHover}  type={"Payouts"} count={22} />
            <Button btnHover={btnHover} setBtnHover={setBtnHover}  type={"Refunds"} count={6} />
        </div>
        <div className="flex flex-row justify-between mt-10 ">
        <Input placeholder={"Order ID or transactions ID"}/>
        <div className="flex flex-row justify-between items-center gap-x-3">
            <div className="flex flex-row justify-center gap-x-2 items-center border rounded border-slate-300 px-2 py-1 text-grayText">Sort <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg></span></div>
            <div className="border p-1 rounded border-slate-300 text-grayText"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
        </div>
        </div>
        </div>
        <Table/>
    </div>
  )
}

export default Transactions