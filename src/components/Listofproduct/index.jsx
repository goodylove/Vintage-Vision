const ListOfProduct = () => {
  return (
    <div>
      <h3>filter items</h3>
      <select
        name=""
        id=""
        className=" bg-black text-white text-[14px] py-2 font-[300] rounded-sm"
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
