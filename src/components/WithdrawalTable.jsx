"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function filterVariablesByValues(variables) {
  const result = {};

  for (const variableName in variables) {
    if (
      variables[variableName] !== undefined &&
      variables[variableName] !== null &&
      variables[variableName] !== ""
    ) {
      result[variableName] = variables[variableName];
    }
  }

  return result;
}

const WithdrawalTable = ({ records }) => {
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const router = useRouter();

  const setIdHandler = (id) => {
    setId(id);
    setUpdate(true);
  };

  const handleDelete = async (id) => {
    const userConfirmed = confirm("Are you sure you want to delete?");

    if (userConfirmed) {
      // Continue with the action
      try {
        const res = await fetch(`/api/manage/withdraw/${id}`, {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = e.target[0].value;
    const status = e.target[1].value;

    // const variableNames = [plan, capital, profit, netbalance];

    // const valueArray = [plan, capital, profit, netbalance];
    // console.log(valueArray);
    // Define the variables
    const variables = {
      amount,
      status,
    };

    // Use the filter function
    const resultObject = filterVariablesByValues(variables);
    // console.log(resultObject);

    if (id && Object.keys(resultObject).length !== 0 && update) {
      try {
        const res = await fetch(`/api/manage/withdraw/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resultObject),
        });
        // const data = await res.json();
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

        // e.target.reset();
        setUpdate(false);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } catch (err) {
        // setErr(true);
        console.log(err);
      }
    } else if (id) {
      toast("Enter a value", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="w-full divide-y divide-gray-200 flex flex-col gap-3">
      {records &&
        (records || [])?.map((req) => {
          const {
            _id: id,
            email,
            date,
            amount,
            status,
            walletaddress,
            method,
          } = req;
          return (
            <form
              onSubmit={handleSubmit}
              className="border-1 border-gray-400 flex flex-col md:flex-row w-full gap-2 md:items-center"
              key={id}
            >
              <div className="px-2 py-1 flex-1 overflow-hidden rounded-[4px] border-white border-1">
                {date.slice(0, 10)}
              </div>
              <div className="px-2 py-1 flex-1 overflow-hidden rounded-[4px] border-white border-1">
                {email}
              </div>
              <div className="px-2 text-[12px] py-1 flex-1 overflow-hidden rounded-[4px] border-white border-1">
                {walletaddress}
              </div>
              <div className="px-2 text-[12px] py-1 flex-1 overflow-hidden rounded-[4px] border-white border-1">
                {method || "Bitcoin"}
              </div>
              <div className="px-2 py-2 flex-1 overflow-hidden">
                <input
                  type="text"
                  placeholder={amount}
                  className="flex-1 overflow-hidden p-2 text-teal-900 outline-none bg-slate-300 rounded-[5px]"
                />
              </div>
              <div className="px-2 py-2 flex-1 overflow-hidden">
                <input
                  type="text"
                  placeholder={status}
                  className="flex-1 overflow-hidden p-2 text-teal-900 outline-none bg-slate-300 rounded-[5px]"
                />
              </div>
              <div className="px-2 py-2 flex gap-3 md:flex-col">
                <button
                  className="bg-green-600 rounded-[5px] p-2"
                  onClick={() => setIdHandler(id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-700 rounded-[5px] p-2"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </div>
            </form>
          );
        })}
    </div>
  );
};

export default WithdrawalTable;
