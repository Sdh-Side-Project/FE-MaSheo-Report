const DamhwaDeliveryContainer = () => {
  const orderCount = 3;

  return (
    <div className="">
      <div className="my-[30%] flex items-center justify-center">
        <div className="flex items-center justify-center w-[250px] h-[250px] bg-red-600 rounded-full animate-pulse">
          <svg
            width="10em"
            height="7em"
            viewBox="0 -2 25 25"
            className="bi bi-play-fill"
            fill="currentColor"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-white"
            >
              {orderCount}회
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DamhwaDeliveryContainer;
