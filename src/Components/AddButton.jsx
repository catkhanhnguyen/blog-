import { Link } from 'react-router-dom';

const AddButton = () => {
  return (
    <Link to="/addrecipe">
      <div
        className="fixed flex bottom-[100px] right-10 w-12 h-12 bg-green-500 justify-center items-center rounded-full cursor-pointer text-white text-l font-bold transition duration-10 hover:bg-green-600"
      >
        ADD
      </div>
    </Link>
  );
};

export default AddButton;
