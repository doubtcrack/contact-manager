const Button = ({ onClick, children }) => {
  return (
    <button
      className=" text-white py-2 px-6 my-10 rounded hover:bg-indigo-700 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
