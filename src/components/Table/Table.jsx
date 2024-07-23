import {orderId , data} from "../../utils/transactionData";

let id = orderId;
function Table() {
  return (
    <div>
        {
            <table className="border-collapse w-full mt-4">
                <thead className="bg-lightGray ">
                    <tr className="*:font-medium border-collapse text-left *:py-2 *:pl-2 *:pr-4 *:text-grayText">
                        <th >Order ID</th>
                        <th>Status</th>
                        <th>Transaction ID</th>
                        <th>Refund Date</th>
                        <th className="text-right">Order Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row,idx) => {
                            return (
                                <tr key={id+idx} className="border-collapse border-b border-rayText *:py-2 *:pr-4 *:pl-2 *:text-grayText">
                                    <td>#{id+idx}</td>
                                    <td className="flex justify-center items-center gap-x-2"><div className={`size-2.5 ${row.status === "Successful" ? "bg-green" : "bg-gray-500" } rounded-full `}></div>{row.status}</td>
                                    <td>{row.txnId}</td>
                                    <td className="text-start">{row.refundDate}</td>
                                    <td className="text-right">&#8377;{row.orderAmount}.00</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        }
    </div>
  )
}

export default Table