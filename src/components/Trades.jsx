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

const TradesTable = ({ records }) => {
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
        const res = await fetch(`/api/manage/trades/${id}`, {
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
    const plan = e.target[0].value;
    const capital = e.target[1].value;
    const profit = e.target[2].value;
    const netbalance = e.target[3].value;

    // const variableNames = [plan, capital, profit, netbalance];

    // const valueArray = [plan, capital, profit, netbalance];
    // console.log(valueArray);
    // Define the variables
    const variables = {
      plan,
      capital,
      profit,
      netbalance,
    };

    // Use the filter function
    const resultObject = filterVariablesByValues(variables);
    // console.log(resultObject);

    if (id && Object.keys(resultObject).length !== 0 && update) {
      try {
        const res = await fetch(`/api/manage/trades/${id}`, {
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
        (records || [])?.map((trade) => {
          const { _id: id, profit, email, capital, netbalance, plan } = trade;
          return (
            <form
              onSubmit={handleSubmit}
              className="border-1 border-gray-400 flex flex-col md:flex-row gap-3 md:items-center justify-center w-full"
              key={id}
            >
              <div className="px-2 py-2 whitespace-nowrap  overflow-hidden w-[300px]">
                {email}
              </div>
              <div className="flex md:flex-col justify-between items-center pl-2">
                <small>Plan</small>
                <input
                  type="text"
                  placeholder={plan}
                  className="overflow-hidden p-2 text-teal-900 outline-none bg-slate-300 rounded-[5px] w-[100px]"
                />
              </div>
              <div className="flex md:flex-col justify-between items-center pl-2">
                <small>Capital</small>

                <input
                  type="text"
                  placeholder={capital}
                  className="overflow-hidden p-2 text-teal-900 outline-none bg-slate-300 rounded-[5px] w-[100px]"
                />
              </div>
              <div className="flex md:flex-col justify-between items-center pl-2">
                <small>Profit</small>

                <input
                  type="text"
                  placeholder={profit}
                  className="overflow-hidden p-2 text-teal-900 outline-none bg-slate-300 rounded-[5px] w-[100px]"
                />
              </div>
              <div className="flex md:flex-col justify-between items-center pl-2">
                <small>Net Balance</small>

                <input
                  type="text"
                  placeholder={netbalance}
                  className="overflow-hidden p-2 text-teal-900 outline-none bg-slate-300 rounded-[5px] w-[100px]"
                />
              </div>
              <div className="px-2 py-2 flex gap-3 items-center justify-center">
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

export default TradesTable;
