import React from "react";
function AccordianItem({ question, answer, idx, setIndex, isClicked }) {
  return (
    <div>
      <div
        className="bg-rgb p-4 flex items-center justify-between hover:bg-gray-800 transition-all duration-300 cursor-pointer"
        onClick={() => setIndex((preIdx) => (preIdx === idx ? null : idx))}
      >
        <p className="text-lg text-white ">{question}</p>
        {!isClicked ? (
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1 text-white"
            data-name="Plus"
            alt=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="elj7tfr3 e164gv2o4 default-ltr-cache-1javmrk e1svuwfo1"
            data-name="Plus"
            alt=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
              fill="currentColor"
            ></path>
          </svg>
        )}
      </div>
      {isClicked && (
        <p className="text-white text-lg p-4 bg-rgb mt-[1.5px]">{answer}</p>
      )}
    </div>
  );
}

export default AccordianItem;
