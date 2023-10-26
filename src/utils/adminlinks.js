import {
  FaChartLine,
  FaTv,
  FaDollarSign,
  FaCreditCard,
  FaHistory,
  FaEmpire,
  FaPowerOff,
} from "react-icons/fa";

export const links = [
  {
    id: "1",
    name: "All Users",
    url: "/manage",
    icon: <FaChartLine />,
  },
  {
    id: "2",
    name: "Active Trade",
    url: "/manage/activetrades",
    icon: <FaHistory />,
  },
  {
    id: "3",
    name: "Deposit Requests",
    url: "/manage/alldeposits",
    icon: <FaTv />,
  },
  {
    id: "4",
    name: "Withdrawal Request",
    url: "/manage/withdrawalrequests",
    icon: <FaCreditCard />,
  },

  {
    id: "5",
    name: "All Transactions",
    url: "/manage/transactionsrecords",
    icon: <FaDollarSign />,
  },
  {
    id: "6",
    name: "Generate Code",
    url: "/manage/generatecode",
    icon: <FaEmpire />,
  },
];
