
const TopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      className="fixed flex bottom-10 right-10 w-12 h-12 bg-red-500 justify-center items-center rounded-full cursor-pointer text-white text-l font-bold transition duration-10 hover:bg-red-600"
      onClick={handleScrollToTop}
    >
      TOP
    </div>
  );
};

export default TopButton;
