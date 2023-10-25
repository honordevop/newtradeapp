import React from "react";

const TransactionRecord = ({ records }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            #
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amount
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Method
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>

      <tbody>
        {records?.map((deposit) => {
          const { _id: id, amount, status, date, method } = deposit;

          return (
            <tr className="border-1 border-gray-400" key={id}>
              <td className="px-6 py-2 whitespace-nowrap">{id.slice(-3)}</td>
              <td className="px-6 py-2 whitespace-nowrap">
                {date.slice(0, 10)}
              </td>
              <td className="px-6 py-2 whitespace-nowrap">{amount}</td>
              <td className="px-6 py-2 whitespace-nowrap">
                {method || "Bitcoin"}{" "}
              </td>
              <td className="px-6 py-2 whitespace-nowrap">{status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionRecord;
