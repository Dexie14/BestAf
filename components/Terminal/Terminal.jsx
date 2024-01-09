"use client";

import { useState, useRef } from "react";
import TermTable from "./TermTable";
import Button from "../Comps/Button";

import ReactModal from "react-modal";
import UserInvite from "./UserInvite";
import GenTermId from "./GenTermId";
import Download from "./Download";
import { CSVLink, CSVDownload } from "react-csv";

import { useGetTerminal } from "@/hooks/auth/useGetTerm";
import Upload from "./Upload";
import { useGetAdmin } from "@/hooks/useAdminProfile";

const Terminal = () => {
  const [terminal, setTerminal] = useState(false);
  const [merchId, setMerchId] = useState(false);
  const [merchant, setMerchant] = useState(false);
  const [date, setDate] = useState(false);
  const [trans, setTrans] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [download, setDownload] = useState(false);
  const [selected, setSelected] = useState(false);

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      opacity: "10",
    },
    content: {
      height: "65vh",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
      borderRadius: "30px",
      width: "50%",
    },
  };

  const { data: term, isLoading, isError, refetch } = useGetTerminal();

  console.log(term, "geting term");

  // const [selectedTerminalId, setSelectedTerminalId] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [inputTerminal, setInputTerminal] = useState("");
  const [inputMerchId, setInputMerchId] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dataToPass, setDataToPass] = useState("");

  const handleTerminalClick = (id) => {
    setInputTerminal("");
    setTerminal(false);
  };
  const handleMerchClick = (id) => {
    setInputMerchId("");
    setMerchId(false);
  };
  const handleStatusCliick = (id) => {
    setSelectedStatus(id);
    setMerchant(false);
  };
  const handleNameCliick = (id) => {
    setSelectedName(id);
  };

  const handleApplyClick = () => {
    setDataToPass({
      inputTerminal,
      fromDate,
      toDate,
      selectedStatus,
      inputMerchId,
      selectedName,
    });
  };
  const handleResetClick = () => {
    setInputTerminal("");
    setFromDate("");
    setToDate("");
    setSelectedStatus("");
    setInputMerchId("");
    setSelectedName("");
    setDataToPass({
      inputTerminal: "",
      fromDate: "",
      toDate: "",
      selectedStatus: "",
      inputMerchId: "",
      selectedName: "",
    });
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // const handleUpload = () => {
  //   // Handle file upload logic using the selectedFile state
  //   if (selectedFile) {
  //     console.log('Uploading file:', selectedFile);
  //     // Add your file upload logic here
  //   } else {
  //     console.error('No file selected');
  //   }
  // };

  const handleDelete = () => {
    setSelectedFile(null);
  };

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const { data: admin } = useGetAdmin();

  return (
    <div className="h-[100%]">
      <section className="flex justify-between">
        <h1 className="text-2xl text-dark" style={{ fontFamily: "DMSans" }}>
          Terminal Overview
        </h1>
        <div className="flex gap-3 items-center">
          <button
            className="flex items-center justify-center gap-2 py-2 px-3 border border-border bg-white text-dark rounded-lg"
            onClick={handleClickUpload}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
              />
            </svg>
            Upload
          </button>
          <button
            onClick={() => setDownload(true)}
            className="flex items-center justify-center gap-2 py-2 px-3 border border-border bg-white text-dark rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1_1141)">
                <path
                  d="M10.8332 10.8334V15.4876L12.3566 13.9642L13.5357 15.1434L9.99991 18.6784L6.46408 15.1434L7.64325 13.9642L9.16658 15.4876V10.8334H10.8332ZM9.99991 1.66675C11.4307 1.66682 12.8116 2.19268 13.8801 3.14435C14.9485 4.09602 15.63 5.40713 15.7949 6.82841C16.8318 7.11118 17.7363 7.74934 18.3505 8.63136C18.9646 9.51337 19.2492 10.5832 19.1546 11.6537C19.06 12.7243 18.5922 13.7276 17.8329 14.4883C17.0736 15.2489 16.0712 15.7185 15.0007 15.8151V14.1367C15.3842 14.082 15.7529 13.9514 16.0854 13.7526C16.4179 13.5537 16.7074 13.2907 16.937 12.9788C17.1667 12.6668 17.332 12.3123 17.4231 11.9358C17.5143 11.5593 17.5296 11.1684 17.468 10.786C17.4065 10.4035 17.2694 10.0372 17.0647 9.70829C16.86 9.37941 16.5919 9.0946 16.2759 8.87047C15.96 8.64635 15.6025 8.48741 15.2245 8.40292C14.8465 8.31844 14.4554 8.31011 14.0741 8.37841C14.2046 7.77082 14.1975 7.14172 14.0534 6.53721C13.9093 5.93269 13.6318 5.36807 13.2412 4.88469C12.8507 4.40131 12.3569 4.01142 11.7961 3.74358C11.2354 3.47573 10.6218 3.33672 10.0003 3.33672C9.37887 3.33672 8.76529 3.47573 8.20452 3.74358C7.64375 4.01142 7.14999 4.40131 6.75941 4.88469C6.36884 5.36807 6.09134 5.93269 5.94723 6.53721C5.80313 7.14172 5.79607 7.77082 5.92658 8.37841C5.16629 8.23564 4.38043 8.40074 3.74187 8.83738C3.1033 9.27403 2.66435 9.94646 2.52158 10.7067C2.3788 11.467 2.5439 12.2529 2.98055 12.8915C3.41719 13.53 4.08963 13.969 4.84991 14.1117L4.99991 14.1367V15.8151C3.92945 15.7187 2.92692 15.2492 2.16752 14.4886C1.40813 13.728 0.940184 12.7247 0.845474 11.6541C0.750763 10.5835 1.03531 9.51365 1.64939 8.63156C2.26346 7.74947 3.168 7.11124 4.20491 6.82841C4.36967 5.40706 5.05108 4.09584 6.11956 3.14414C7.18804 2.19243 8.56904 1.66663 9.99991 1.66675Z"
                  fill="#4F4F4F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1141">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Download
          </button>
          {admin?.role === "superadmin" && (
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center gap-2 py-2 px-3 border border-primary bg-white text-dark rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1147)">
                  <path
                    d="M1.60252 7.80845C1.17752 7.63761 1.18252 7.38345 1.63085 7.23428L17.5358 1.93261C17.9767 1.78595 18.2292 2.03262 18.1059 2.46428L13.5608 18.3693C13.4358 18.8101 13.165 18.8301 12.9633 18.4276L9.16668 10.8334L1.60252 7.80845ZM5.67752 7.64178L10.3742 9.52095L12.9075 14.5893L15.8625 4.24762L5.67668 7.64178H5.67752Z"
                    fill="#4F4F4F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1147">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Invite Users
            </button>
          )}
          {admin?.role === "superadmin" && (
            <button
              onClick={() => setGenerate(true)}
              className="flex items-center justify-center gap-2 py-2 px-3 border border-primary bg-primary text-white rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1153)">
                  <path
                    d="M9.1665 9.16675V4.16675H10.8332V9.16675H15.8332V10.8334H10.8332V15.8334H9.1665V10.8334H4.1665V9.16675H9.1665Z"
                    fill="#F2F2F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1153">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Generate New TID
            </button>
          )}
        </div>
      </section>
      <section className="my-3 flex gap-2 items-center">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {selectedFile && (
          <ReactModal
            isOpen={selectedFile}
            onRequestClose={() => setSelectedFile(false)}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            overlayClassName={"h-full left-0 bg-[#0000009b] z-[99999]"}
            style={customStyles}
          >
            <Upload
              setModalIsOpen={setSelectedFile}
              selectedFile={selectedFile}
              handleDelete={handleDelete}
            />
          </ReactModal>
        )}
      </section>
      <section className="flex flex-wrap gap-3 items-center mt-10 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_1_1161)">
            <path
              d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1161">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <aside className="bg-white w-[120px] flex gap-2 flex-col relative cursor-pointer">
          <div
            className={`flex justify-center text-dark border-border px-1 py-2 border text-sm ${
              terminal ? "rounded-t-lg" : "rounded-lg"
            } gap-1 items-center w-full`}
            onClick={() => setTerminal(!terminal)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_837)">
                <path
                  d="M6.66658 14H1.99992C1.82311 14 1.65354 13.9298 1.52851 13.8047C1.40349 13.6797 1.33325 13.5101 1.33325 13.3333V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H6.66658C6.66658 2.35362 6.80706 2.69276 7.05711 2.94281C7.30716 3.19286 7.6463 3.33333 7.99992 3.33333C8.35354 3.33333 8.69268 3.19286 8.94273 2.94281C9.19278 2.69276 9.33325 2.35362 9.33325 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V13.3333C14.6666 13.5101 14.5963 13.6797 14.4713 13.8047C14.3463 13.9298 14.1767 14 13.9999 14H9.33325C9.33325 13.6464 9.19278 13.3072 8.94273 13.0572C8.69268 12.8071 8.35354 12.6667 7.99992 12.6667C7.6463 12.6667 7.30716 12.8071 7.05711 13.0572C6.80706 13.3072 6.66658 13.6464 6.66658 14ZM5.68992 12.6667C5.92391 12.2611 6.26062 11.9243 6.66614 11.6903C7.07166 11.4562 7.53169 11.3331 7.99992 11.3333C8.98658 11.3333 9.84859 11.8693 10.3099 12.6667H13.3333V3.33333H10.3099C10.0759 3.7389 9.73922 4.07566 9.33369 4.30973C8.92817 4.5438 8.46814 4.66691 7.99992 4.66667C7.53169 4.66691 7.07166 4.5438 6.66614 4.30973C6.26062 4.07566 5.92391 3.7389 5.68992 3.33333H2.66659V12.6667H5.68992ZM3.99992 5.33333H5.33325V10.6667H3.99992V5.33333ZM10.6666 5.33333H11.9999V10.6667H10.6666V5.33333Z"
                  fill="#4F4F4F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_837">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {/* {selectedTerminalId ? selectedTerminalId : "Terminal ID"} */}
            Terminal ID
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_842)">
                <path
                  d="M8.00005 9.99997L5.17139 7.1713L6.11472 6.22864L8.00005 8.11464L9.88539 6.22864L10.8287 7.1713L8.00005 9.99997Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_842">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {terminal && (
            <div className="bg-white absolute top-[100%] rounded-b-lg border border-border border-t-0 w-full z-[1000]">
              {inputTerminal && (
                <p
                  onClick={() => handleTerminalClick("")}
                  className={`text-dark text-center text-sm mx-4 my-2 flex justify-center py-2 border border-border rounded ${
                    !inputTerminal ? "bg-gray-300" : ""
                  }`}
                >
                  Default
                </p>
              )}
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  onChange={(e) => setInputTerminal(e.target.value)}
                  value={inputTerminal}
                  className=" text-dark text-center w-full text-xs mx-1 my-2 flex justify-center py-2 border border-border rounded outline-none"
                />
              </div>
            </div>
          )}
        </aside>
        <aside className="bg-white w-[150px] flex gap-2 flex-col relative cursor-pointer">
          <div
            className={`flex justify-center text-dark border-border px-1 py-2 border text-sm ${
              merchId ? "rounded-t-lg" : "rounded-lg"
            } gap-1 items-center w-full`}
            onClick={() => setMerchId(!merchId)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_837)">
                <path
                  d="M6.66658 14H1.99992C1.82311 14 1.65354 13.9298 1.52851 13.8047C1.40349 13.6797 1.33325 13.5101 1.33325 13.3333V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H6.66658C6.66658 2.35362 6.80706 2.69276 7.05711 2.94281C7.30716 3.19286 7.6463 3.33333 7.99992 3.33333C8.35354 3.33333 8.69268 3.19286 8.94273 2.94281C9.19278 2.69276 9.33325 2.35362 9.33325 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V13.3333C14.6666 13.5101 14.5963 13.6797 14.4713 13.8047C14.3463 13.9298 14.1767 14 13.9999 14H9.33325C9.33325 13.6464 9.19278 13.3072 8.94273 13.0572C8.69268 12.8071 8.35354 12.6667 7.99992 12.6667C7.6463 12.6667 7.30716 12.8071 7.05711 13.0572C6.80706 13.3072 6.66658 13.6464 6.66658 14ZM5.68992 12.6667C5.92391 12.2611 6.26062 11.9243 6.66614 11.6903C7.07166 11.4562 7.53169 11.3331 7.99992 11.3333C8.98658 11.3333 9.84859 11.8693 10.3099 12.6667H13.3333V3.33333H10.3099C10.0759 3.7389 9.73922 4.07566 9.33369 4.30973C8.92817 4.5438 8.46814 4.66691 7.99992 4.66667C7.53169 4.66691 7.07166 4.5438 6.66614 4.30973C6.26062 4.07566 5.92391 3.7389 5.68992 3.33333H2.66659V12.6667H5.68992ZM3.99992 5.33333H5.33325V10.6667H3.99992V5.33333ZM10.6666 5.33333H11.9999V10.6667H10.6666V5.33333Z"
                  fill="#4F4F4F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_837">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Merchant ID
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_842)">
                <path
                  d="M8.00005 9.99997L5.17139 7.1713L6.11472 6.22864L8.00005 8.11464L9.88539 6.22864L10.8287 7.1713L8.00005 9.99997Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_842">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {merchId && (
            <div className="bg-white absolute top-[100%] rounded-b-lg border border-border border-t-0 w-full z-[1000]">
              {inputMerchId && (
                <p
                  onClick={() => handleMerchClick("")}
                  className={`text-dark text-center text-sm mx-4 my-2 flex justify-center py-2 border border-border rounded ${
                    !inputMerchId ? "bg-gray-300" : ""
                  }`}
                >
                  Default
                </p>
              )}
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  onChange={(e) => setInputMerchId(e.target.value)}
                  value={inputMerchId}
                  className=" text-dark text-center w-full text-xs mx-1 my-2 flex justify-center py-2 border border-border rounded outline-none"
                />
              </div>
            </div>
          )}
        </aside>
        <aside className="bg-white w-[160px] flex gap-2 flex-col relative cursor-pointer">
          <div
            className={`flex justify-center text-dark border-border px-1 py-2 border text-sm ${
              merchant ? "rounded-t-lg" : "rounded-lg"
            } gap-1 items-center w-full`}
            onClick={() => setMerchant(!merchant)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_1176)">
                <path
                  d="M7.99984 9.33342V10.6667C6.93897 10.6667 5.92156 11.0882 5.17141 11.8383C4.42126 12.5885 3.99984 13.6059 3.99984 14.6667H2.6665C2.6665 13.2523 3.22841 11.8957 4.2286 10.8955C5.2288 9.89532 6.58535 9.33342 7.99984 9.33342ZM7.99984 8.66675C5.78984 8.66675 3.99984 6.87675 3.99984 4.66675C3.99984 2.45675 5.78984 0.666748 7.99984 0.666748C10.2098 0.666748 11.9998 2.45675 11.9998 4.66675C11.9998 6.87675 10.2098 8.66675 7.99984 8.66675ZM7.99984 7.33342C9.47317 7.33342 10.6665 6.14008 10.6665 4.66675C10.6665 3.19341 9.47317 2.00008 7.99984 2.00008C6.5265 2.00008 5.33317 3.19341 5.33317 4.66675C5.33317 6.14008 6.5265 7.33342 7.99984 7.33342ZM11.9998 14.3334L10.0405 15.3634L10.4145 13.1821L8.82984 11.6367L11.0205 11.3181L11.9998 9.33342L12.9798 11.3181L15.1698 11.6367L13.5852 13.1821L13.9585 15.3634L11.9998 14.3334Z"
                  fill="#4F4F4F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1176">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {selectedName ? selectedName : "Merchant Name"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_842)">
                <path
                  d="M8.00005 9.99997L5.17139 7.1713L6.11472 6.22864L8.00005 8.11464L9.88539 6.22864L10.8287 7.1713L8.00005 9.99997Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_842">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {merchant && (
            <div className="bg-white absolute top-[100%] rounded-b-lg border border-border border-t-0 w-full z-[1000]">
              {selectedName && (
                <p
                  onClick={() => handleNameCliick("")}
                  className={`text-dark text-sm mx-4 my-2 flex justify-center py-2 border border-border rounded ${
                    !selectedStatus ? "bg-gray-300" : ""
                  }`}
                >
                  Default
                </p>
              )}
              {term?.items?.map((item) => {
                return (
                  <p
                    onClick={() => handleNameCliick(item?.merchantName)}
                    className=" text-dark text-sm mx-4 my-2 flex justify-center py-2 border border-border rounded"
                  >
                    {item?.merchantName}
                  </p>
                );
              })}
            </div>
          )}
        </aside>
        <aside className="bg-white w-[210px] flex gap-2 flex-col relative cursor-pointer">
          <div
            className={`flex justify-center text-dark border-border px-1 py-2 border text-sm ${
              date ? "rounded-t-lg" : "rounded-lg"
            } gap-1 items-center w-full`}
            onClick={() => setDate(!date)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_865)">
                <path
                  d="M11.3333 2.00002H13.9999C14.1767 2.00002 14.3463 2.07026 14.4713 2.19528C14.5963 2.32031 14.6666 2.48988 14.6666 2.66669V13.3334C14.6666 13.5102 14.5963 13.6797 14.4713 13.8048C14.3463 13.9298 14.1767 14 13.9999 14H1.99992C1.82311 14 1.65354 13.9298 1.52851 13.8048C1.40349 13.6797 1.33325 13.5102 1.33325 13.3334V2.66669C1.33325 2.48988 1.40349 2.32031 1.52851 2.19528C1.65354 2.07026 1.82311 2.00002 1.99992 2.00002H4.66658V0.666687H5.99992V2.00002H9.99992V0.666687H11.3333V2.00002ZM13.3333 6.00002V3.33335H11.3333V4.66669H9.99992V3.33335H5.99992V4.66669H4.66658V3.33335H2.66659V6.00002H13.3333ZM13.3333 7.33335H2.66659V12.6667H13.3333V7.33335ZM3.99992 8.66669H7.33325V11.3334H3.99992V8.66669Z"
                  fill="#4F4F4F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_865">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Date
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_842)">
                <path
                  d="M8.00005 9.99997L5.17139 7.1713L6.11472 6.22864L8.00005 8.11464L9.88539 6.22864L10.8287 7.1713L8.00005 9.99997Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_842">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {date && (
            <div className="bg-white absolute top-[100%] rounded-b-lg border border-border border-t-0 w-full z-[1000]">
              <div className="flex justify-center items-center">
                <input
                  onChange={(e) => setFromDate(e.target.value)}
                  type="date"
                  value={fromDate}
                  className=" text-dark text-xs mx-1 my-2 flex justify-center py-2 border border-border rounded"
                />
                "to"
                <input
                  onChange={(e) => setToDate(e.target.value)}
                  type="date"
                  value={toDate}
                  className=" text-dark text-xs mx-1 my-2 flex justify-center py-2  border border-border rounded"
                />
              </div>
            </div>
          )}
        </aside>
        {/* <aside className="bg-white w-[165px] flex gap-2 flex-col relative cursor-pointer">
          <div
            className={`flex justify-center text-dark border-border px-1 py-2 border text-sm ${
              trans ? "rounded-t-lg" : "rounded-lg"
            } gap-1 items-center w-full`}
            onClick={() => setTrans(!trans)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_865)">
                <path
                  d="M11.3333 2.00002H13.9999C14.1767 2.00002 14.3463 2.07026 14.4713 2.19528C14.5963 2.32031 14.6666 2.48988 14.6666 2.66669V13.3334C14.6666 13.5102 14.5963 13.6797 14.4713 13.8048C14.3463 13.9298 14.1767 14 13.9999 14H1.99992C1.82311 14 1.65354 13.9298 1.52851 13.8048C1.40349 13.6797 1.33325 13.5102 1.33325 13.3334V2.66669C1.33325 2.48988 1.40349 2.32031 1.52851 2.19528C1.65354 2.07026 1.82311 2.00002 1.99992 2.00002H4.66658V0.666687H5.99992V2.00002H9.99992V0.666687H11.3333V2.00002ZM13.3333 6.00002V3.33335H11.3333V4.66669H9.99992V3.33335H5.99992V4.66669H4.66658V3.33335H2.66659V6.00002H13.3333ZM13.3333 7.33335H2.66659V12.6667H13.3333V7.33335ZM3.99992 8.66669H7.33325V11.3334H3.99992V8.66669Z"
                  fill="#4F4F4F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_865">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {selectedStatus ? selectedStatus : "Status"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1_842)">
                <path
                  d="M8.00005 9.99997L5.17139 7.1713L6.11472 6.22864L8.00005 8.11464L9.88539 6.22864L10.8287 7.1713L8.00005 9.99997Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_842">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {trans && (
            <div className="bg-white absolute top-[100%] rounded-b-lg border border-border border-t-0 w-full z-[1000]">
              {selectedStatus && (
                <p
                  onClick={() => handleStatusCliick("")}
                  className={`text-dark text-sm mx-4 my-2 flex justify-center py-2 border border-border rounded ${
                    !selectedStatus ? "bg-gray-300" : ""
                  }`}
                >
                  Default
                </p>
              )}

              <p
                onClick={() => handleStatusCliick("success")}
                className="flex gap-1 text-sm font-normal text-[#165E3D]  bg-[#EDFFEA] w-fit mx-4 my-2 py-2 px-3  justify-center items-center rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M8.53312 14.6667C4.85122 14.6667 1.86646 11.6819 1.86646 8.00004C1.86646 4.31814 4.85122 1.33337 8.53312 1.33337C12.215 1.33337 15.1998 4.31814 15.1998 8.00004C15.1998 11.6819 12.215 14.6667 8.53312 14.6667ZM7.86819 10.6667L12.5823 5.95266L11.6395 5.00985L7.86819 8.78111L5.98259 6.89544L5.03978 7.83831L7.86819 10.6667Z"
                    fill="#165E3D"
                  />
                </svg>
                Succeeded
              </p>
              <p
                onClick={() => handleStatusCliick("pending")}
                className="flex gap-1 text-sm font-normal text-[#B5850B]  bg-[#FFF6E9] w-fit mx-4 my-2 py-2 px-3  justify-center items-center rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M8.49992 14.6666C4.81802 14.6666 1.83325 11.6818 1.83325 7.99998C1.83325 4.31808 4.81802 1.33331 8.49992 1.33331C12.1818 1.33331 15.1666 4.31808 15.1666 7.99998C15.1666 11.6818 12.1818 14.6666 8.49992 14.6666ZM9.16658 7.99998V4.66665H7.83325V9.33331H11.8333V7.99998H9.16658Z"
                    fill="#B5850B"
                  />
                </svg>
                Pending
              </p>
              <p
                onClick={() => handleStatusCliick("failed")}
                className="flex gap-1 text-sm font-normal text-[#B83131]  bg-[#FFEAEA] w-fit mx-4 my-2 py-2 px-3  justify-center items-center rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998C14.6666 11.6818 11.6818 14.6666 7.99992 14.6666ZM4.66658 7.33331V8.66665H11.3333V7.33331H4.66658Z"
                    fill="#B83131"
                  />
                </svg>
                Failed
              </p>
            </div>
          )}
        </aside> */}
        <div className="w-fit">
          <Button onClick={handleApplyClick} className="py-2 px-2">
            APPLY
          </Button>
        </div>
        <div className="w-fit">
          <Button onClick={handleResetClick} className="py-2 px-2">
            RESET
          </Button>
        </div>
      </section>
      <TermTable
        paramlist={dataToPass}
        setDownload={setDownload}
        download={download}
        setGenerate={setGenerate}
        generate={generate}
      />
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        overlayClassName={"h-full left-0 bg-[#0000009b] z-[99999]"}
        style={customStyles}
      >
        <UserInvite setModalIsOpen={setIsOpen} modalIsOpen={isOpen} />
      </ReactModal>
      {/* <ReactModal
        isOpen={generate}
        onRequestClose={() => setGenerate(false)}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        overlayClassName={"h-full left-0 bg-[#0000009b] z-[99999]"}
        style={customStyles}
      >
        <GenTermId setModalIsOpen={setGenerate} modalIsOpen={generate} refetch={refetch} />
      </ReactModal> */}
    </div>
  );
};

export default Terminal;
