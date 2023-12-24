import Image from "next/image";
import success from "@/public/assets/auth/success.svg";

const TransDetails = ({ setModalIsOpen, modalIsOpen }) => {
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="py-4 px-6 rounded-[40px] ">
      <section className="flex justify-between pb-3 border-b-2 border-[#828282]">
        <h3 className="text-xl font-semibold">Transaction Details</h3>
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
      <section className="my-6 ml-3">
        <div className="flex flex-wrap justify-between mb-3">
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Response Code:
            <span className="text-[#828282] font-medium">00</span>
          </h3>
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Amount: <span className="text-[#828282] font-medium">#6000</span>
          </h3>
        </div>
        <div className="flex  flex-wrap justify-between mb-3">
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Expiry:
            <span className="text-[#828282] font-medium">2020-10-10</span>
          </h3>
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Host: <span className="text-[#828282] font-medium">James</span>
          </h3>
        </div>
        <div className="flex  flex-wrap justify-between mb-3">
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Pan:
            <span className="text-[#828282] font-medium">*********</span>
          </h3>
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Refcode: <span className="text-[#828282] font-medium">YSDSD78</span>
          </h3>
        </div>
        <div className="flex  flex-wrap justify-between mb-3">
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            RRN:
            <span className="text-[#828282] font-medium">90s</span>
          </h3>
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Stan: <span className="text-[#828282] font-medium">asa</span>
          </h3>
        </div>
        <div className="flex  flex-wrap justify-between mb-3">
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Transactingterminalid:
            <span className="text-[#828282] font-medium">Kepp</span>
          </h3>
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Route: <span className="text-[#828282] font-medium">Same</span>
          </h3>
        </div>
        <div className="flex  flex-wrap justify-between mb-3">
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            TransactionId:
            <span className="text-[#828282] font-medium">6767667</span>
          </h3>
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            TerminalId:{" "}
            <span className="text-[#828282] font-medium">20z0an51</span>
          </h3>
        </div>
        <div className="flex  flex-wrap justify-between mb-3">
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Source:
            <span className="text-[#828282] font-medium">Card</span>
          </h3>
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            Responsemessage:{" "}
            <span className="text-[#828282] font-medium">Success</span>
          </h3>
        </div>
        <div className="flex  flex-wrap justify-between mb-3">
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            CreatedAt:
            <span className="text-[#828282] font-medium">
              2023-12-18T10:47:38.851Z
            </span>
          </h3>
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            UpdatedAt:{" "}
            <span className="text-[#828282] font-medium">
              2023-12-18T10:47:38.851Z{" "}
            </span>
          </h3>
        </div>
        <div className="flex  flex-wrap justify-between mb-3">
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            _V:
            <span className="text-[#828282] font-medium">0</span>
          </h3>
          <h3 className="text-[#333] font-semibold text-xs w-1/2">
            dateCreated:{" "}
            <span className="text-[#828282] font-medium">
              2023-12-18T23:54:15.840Z
            </span>
          </h3>
        </div>
      </section>
    </div>
  );
};

export default TransDetails;
