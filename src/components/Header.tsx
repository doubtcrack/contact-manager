import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);
  let value = "Contact Page";
  if (
    location.pathname === "/Documentation" ||
    location.pathname === "/Graphs" ||
    location.pathname === "/ContactsList"
  )
    value = location.pathname.slice(1);
  return (
    <nav className="w-full z-10 bg-purple-500 h-20 fixed items-center flex">
      <h2 className="text-2xl font-bold font-serif text-white justify-center px-4 mx-auto items-center ">
        {value}
      </h2>
    </nav>
  );
}
