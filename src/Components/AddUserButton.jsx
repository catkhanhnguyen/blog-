import { IoAddCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AddUserButton = () => {
  return (
    <Link to="/adduser">
      <div
        className="fixed flex bottom-[160px] right-10 w-12 h-12 bg-blue-500 justify-center items-center rounded-full cursor-pointer text-white text-[28px] font-bold transition duration-10 hover:bg-blue-600"
      >
        <IoAddCircle />
      </div>
    </Link>
  );
};

export default AddUserButton;
