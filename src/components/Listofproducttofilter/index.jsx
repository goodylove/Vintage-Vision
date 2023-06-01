const ListOfProduct = () => {
  return (
    <div>
      <h3 className="text-[13px] md:text-[30px]">filter items</h3>
      <select
        name=""
        id=""
        className=" bg-black text-white text-[13px] md:py-2 font-[300] rounded-sm py-[2px] mr-4"
      >
        <option value=""> All rooms</option>
        <option value="">Bedrooms</option>
        <option value="">Diningroom</option>
        <option value="">livingrooms</option>
      </select>
    </div>
  );
};

export default ListOfProduct;
