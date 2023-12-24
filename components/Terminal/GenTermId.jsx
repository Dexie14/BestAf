import Button from "../Comps/Button";

const GenTermId = ({ setModalIsOpen, modalIsOpen }) => {
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="py-4 px-6 rounded-[40px] ">
      <section className="flex justify-between pb-3 border-b-2 border-[#828282]">
        <h3 className="text-xl font-semibold">Generate Terminal ID</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className="cursor-pointer"
          onClick={handleCloseModal}
        >
          <g clip-path="url(#clip0_2_4170)">
            <path
              d="M15 13.2324L21.1875 7.04492L22.955 8.81242L16.7675 14.9999L22.955 21.1874L21.1875 22.9549L15 16.7674L8.81254 22.9549L7.04504 21.1874L13.2325 14.9999L7.04504 8.81242L8.81254 7.04492L15 13.2324Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_4170">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </section>
      <section className="my-10">
        <div className="mb-5 flex flex-col">
          <label htmlFor="IMEI" className=" text-sm font-semibold text-[#333333] mb-1">
            Serial Number/IMEI
          </label>
          <input
            id="IMEI"
            className="text-sm rounded-lg px-3 bg-[#f2f2f2] py-3 border border-border placeholder:text-border"
            type="text"
            placeholder="Enter Serial Number/IMEI"
          />
        </div>
        <div className="mb-5 flex flex-col">
          <label
            htmlFor="address"
            className="font-semibold text-[#333333] mb-1 text-sm "
          >
            Address of location
          </label>
          <input
            id="address"
            className="text-sm rounded-lg bg-[#f2f2f2] px-3 py-3 border border-border placeholder:text-border"
            type="text"
            placeholder="Enter Address"
          />
        </div>
        <div className="mb-5 flex flex-col">
          <label
            htmlFor="merchant"
            className="text-sm  font-semibold text-[#333333] mb-1"
          >
            Merchant ID
          </label>
          <input
            id="merchant"
            className="text-sm rounded-lg px-3 py-3 bg-[#f2f2f2] border border-border placeholder:text-border"
            type="email"
            placeholder="Enter MerchantID"
          />
        </div>
        <Button className="w-full px-3 py-2">Generate</Button>
      </section>
    </div>
  );
};

export default GenTermId;
