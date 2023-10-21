import React from "react";

const UserTable = ({ records }) => {
  return (
    <div className="min-w-full divide-y divide-gray-200 w-max">
      {records &&
        (records || [])?.map((user) => {
          const {
            _id: id,
            fullname,
            email,
            mobilenumber,
            country,
            status,
          } = user;
          return (
            <form action="" className="border-1 border-gray-400 flex" key={id}>
              <div className="px-6 py-2 whitespace-nowrap flex-1">
                {fullname}
              </div>
              <div className="px-6 py-2 whitespace-nowrap flex-1">{email}</div>
              <div className="px-6 py-2 whitespace-nowrap flex-1">
                {mobilenumber}
              </div>
              <div className="px-6 py-2 whitespace-nowrap flex-1">
                {country}
              </div>
              <div className="px-6 py-2 whitespace-nowrap flex-1">
                <input type="text" placeholder={status} className="flex-1 " />
              </div>
              <div className="px-6 py-2 whitespace-nowrap flex-1">
                <button className="bg-green-600 rounded-[5px] p-2 flex-1">
                  Update
                </button>
              </div>
            </form>
          );
        })}
    </div>
  );
};

export default UserTable;
