import Table from "./Table";

const Dashboard = () => {
  return (
    <div>
      <section className="flex justify-between">
        <h1 className="text-2xl text-dark" style={{ fontFamily: "DMSans" }}>
          Dashboard Overview
        </h1>
        <button className="flex items-center justify-center gap-2 py-2 px-3 w-1/6 bg-primary text-white rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_1_1079)">
              <path
                d="M1.60252 7.80845C1.17752 7.63761 1.18252 7.38345 1.63085 7.23428L17.5358 1.93261C17.9767 1.78595 18.2292 2.03262 18.1059 2.46428L13.5608 18.3693C13.4358 18.8101 13.165 18.8301 12.9633 18.4276L9.16668 10.8334L1.60252 7.80845ZM5.67752 7.64178L10.3742 9.52095L12.9075 14.5893L15.8625 4.24762L5.67668 7.64178H5.67752Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1079">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Invite Users
        </button>
      </section>
      <section className=" flex gap-5 mt-5">
        <div
          className="bg-white rounded-2xl py-4 px-6 w-1/5"
          style={{ boxShadow: " 0px 2px 4px 0px rgba(0, 0, 0, 0.10);" }}
        >
          <p className="mb-5 font-semibold">Total Terminal ID</p>
          <h5 className="text-primary text-3xl mb-3">200</h5>
        </div>
        <div
          className="bg-white rounded-2xl py-4 px-6 w-1/5"
          style={{ boxShadow: " 0px 2px 4px 0px rgba(0, 0, 0, 0.10);" }}
        >
          <p className="mb-5 font-semibold">Total Terminal ID</p>
          <h5 className="text-primary text-3xl mb-3">200</h5>
        </div>
        <div
          className="bg-white rounded-2xl py-4 px-6 w-1/5"
          style={{ boxShadow: " 0px 2px 4px 0px rgba(0, 0, 0, 0.10);" }}
        >
          <p className="mb-5 font-semibold">Total Terminal ID</p>
          <h5 className="text-primary text-3xl mb-3">200</h5>
        </div>
        <div
          className="bg-white rounded-2xl py-4 px-6 w-1/5"
          style={{ boxShadow: " 0px 2px 4px 0px rgba(0, 0, 0, 0.10);" }}
        >
          <p className="mb-5 font-semibold">Total Terminal ID</p>
          <h5 className="text-primary text-3xl mb-3">200</h5>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex justify-between items-center">
          <h5 className="text-xl font-semibold text-dark">Transaction</h5>
          <button className="bg-white font-semibold text-sm border-[#828282] px-1 py-1 w-1/12 border text-primary rounded-lg">
            View all
          </button>
        </div>
        <Table/>
        <p className="text-xs text-[#4B5563] font-bold">7/50 <span className="font-normal">results</span></p>
      </section>
    </div>
  );
};

export default Dashboard;
