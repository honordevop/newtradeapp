"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const DepositTable = ({ records }) => {
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
        const res = await fetch(`/api/manage/deposit/${id}`, {
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
    const status = e.target[0].value;
    // console.log(id);
    // console.log(status);
    if (id && status.trim().length !== 0 && update) {
      try {
        const res = await fetch(`/api/manage/deposit/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
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
        // res.status === 201 && router?.push("/manage");
      } catch (err) {
        // setErr(true);
        console.log(err);
      }
    } else if (id) {
      toast("Enter a valid text", {
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
        (records || [])?.map((user) => {
          const { _id: id, email, date, amount, status, method } = user;
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
              <div className="px-2 py-1 flex-1 overflow-hidden rounded-[4px] border-white border-1">
                {method}
              </div>
              <div className="px-2 py-1 flex-1 overflow-hidden rounded-[4px] border-white border-1">
                {amount}
              </div>
              <div className="px-2 py-2 whitespace-nowrap flex-1 overflow-hidden">
                <input
                  type="text"
                  placeholder={status}
                  className="flex-1 overflow-hidden p-2 text-teal-900 outline-none bg-slate-300 rounded-[5px]"
                />
              </div>
              <div className="px-2 py-2 flex gap-3">
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

export default DepositTable;
