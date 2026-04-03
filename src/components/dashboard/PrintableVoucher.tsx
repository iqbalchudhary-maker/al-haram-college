import { format } from "date-fns";

export default function PrintableVoucher({ data }: { data: any }) {
  return (
    <div className="bg-white p-8 max-w-[800px] mx-auto border-2 border-slate-300 print:border-0 print:p-0">
      <div className="grid grid-cols-2 gap-12 border-b-2 border-dashed border-slate-400 pb-8 mb-8">
        {/* Left Side: College Copy */}
        <VoucherTemplate title="College Copy" data={data} />
        
        {/* Right Side: Student Copy */}
        <VoucherTemplate title="Student Copy" data={data} />
      </div>
      
      <div className="text-center text-xs text-slate-500 uppercase tracking-widest mt-4 print:hidden">
        Press Ctrl + P to Print this Voucher
      </div>
    </div>
  );
}

function VoucherTemplate({ title, data }: { title: string; data: any }) {
  return (
    <div className="space-y-4">
      <div className="text-center border-b pb-2">
        <h2 className="text-xl font-black uppercase">Uswa College Bhowana</h2>
        <p className="text-[10px] text-slate-600">A Project of Jabir Bin Hayyan Trust</p>
        <span className="bg-slate-200 px-2 py-0.5 rounded text-[10px] font-bold">{title}</span>
      </div>

      <div className="flex justify-between text-xs">
        <span><strong>Voucher #:</strong> {data.voucherNo}</span>
        <span><strong>Date:</strong> {format(new Date(), "dd-MM-yyyy")}</span>
      </div>

      <div className="space-y-1 border-y py-2 text-sm">
        <p><strong>Name:</strong> {data.studentName}</p>
        <p><strong>Roll No:</strong> {data.rollNumber}</p>
        <p><strong>Class:</strong> {data.className}</p>
      </div>

      <table className="w-full text-xs text-left">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-1">Description</th>
            <th className="p-1 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-1">{data.feeMonth} - Tuition Fee</td>
            <td className="p-1 text-right">Rs. {data.amount}</td>
          </tr>
          {data.fine > 0 && (
            <tr>
              <td className="p-1 text-red-600">Fine/Late Fee</td>
              <td className="p-1 text-right">Rs. {data.fine}</td>
            </tr>
          )}
        </tbody>
        <tfoot className="border-t-2">
          <tr className="font-bold">
            <td className="p-1 uppercase">Total Payable</td>
            <td className="p-1 text-right text-lg">Rs. {data.total}</td>
          </tr>
        </tfoot>
      </table>

      <div className="flex justify-between items-end pt-8">
        <div className="border-t w-24 text-center text-[10px]">Cashier</div>
        <div className="border-t w-24 text-center text-[10px]">Principal</div>
      </div>
    </div>
  );
}