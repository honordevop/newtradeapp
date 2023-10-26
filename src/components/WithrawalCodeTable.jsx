import React from "react";
import { toast } from "react-toastify";

const WithdrawalCodeTable = ({ codes }) => {
  const handleDelete = async (id) => {
    const userConfirmed = confirm("Are you sure you want to delete?");

    if (userConfirmed) {
      // Continue with the action
      try {
        const res = await fetch(`/api/manage/code/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        toast(data.message, {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Code
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
        </tr>
      </thead>

      <tbody className="">
        {codes?.map((codee) => {
          const { _id: id, createdAt: date, email, code } = codee;

          return (
            <tr className="border-1 border-gray-400" key={id}>
              <td className="px-6 py-2 whitespace-nowrap">
                {date.slice(0, 10)}
              </td>
              <td className="px-6 py-2 whitespace-nowrap">{email}</td>
              <td className="px-6 py-2 whitespace-nowrap">{code}</td>
              <td
                className="px-6 py-2 bg-red-700 rounded-[5px] p-2 cursor-pointer"
                onClick={() => handleDelete(id)}
              >
                Delete
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WithdrawalCodeTable;
