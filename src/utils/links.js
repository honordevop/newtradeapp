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
    name: "Dashboard",
    url: "/trade",
    icon: <FaChartLine />,
  },
  {
    id: "2",
    name: "My Account",
    url: "/trade/account",
    icon: <FaTv />,
  },
  {
    id: "3",
    name: "Deposit",
    url: "/trade/deposit",
    icon: <FaCreditCard />,
  },

  {
    id: "4",
    name: "Withdrawal",
    url: "/trade/withdrawal",
    icon: <FaDollarSign />,
  },
  {
    id: "5",
    name: "Transactions",
    url: "/trade/transactions",
    icon: <FaHistory />,
  },
  // {
  //   id: "6",
  //   name: "Account Settings",
  //   url: "/trade/settings",
  //   icon: <FaEmpire />,
  // },
];
