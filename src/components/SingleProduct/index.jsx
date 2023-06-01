import Button from './../Button/index';
const SingleProduct = () => {
  return (
    <main className="w-full flex justify-center items-center mt-10">
      <section className="flex items-center gap-10  mt-20 flex-col lg:flex-row md:flex-row sm:flex-col p-5">
        <div>
          <img
            src="https://media.istockphoto.com/id/1468219008/photo/warm-and-cozy-composition-of-easter-living-room-interior-with-coffee-table-white-sofa.webp?b=1&s=170667a&w=0&k=20&c=Mj21NN7IfDIz5V6Pu2eVEjMPGMDmx5VymLiN2_LJEb0="
            alt=""
            className=" shadow-md rounded"
          />
        </div>
        <div>
          <div>
            <h4>Name</h4>
            <h4>price</h4>
            <h4>discount</h4>
            <h4>type</h4>

            <p className="max-w-[300px] font-Poppins font-[300]">
              <span className="text-[20px] font-[400]">Discription:</span>Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              dolorum modi unde, assumenda minima exercitationem labore vitae
              veritatis eveniet consectetur quod inventore nam voluptas facilis
              et, accusamus, quibusdam dolor minus.
            </p>
            <div className="flex  items-center my-2 gap-5">
              <Button
                className=" border-[2px] bg-[#0D1C1E] text-[#D0D0CF] rounded-md shadow-md lg:p-3 hover:bg-white hover:text-black sm:p-[7px] p-[5px]"
                text="Add To Cart"
              />
              <Button
                className=" border-[2px] bg-[#0D1C1E] text-[#D0D0CF] rounded-md  shadow-md lg:p-3 hover:bg-white hover:text-black sm:p-[7px] p-[5px]"
                text="Add To Wishlist"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
