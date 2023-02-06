import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="py-8 w-full"
      style={{ cursor: 'pointer' }}
      onClick={() => navigate('/teams/1')}
    >
      <div className="lg:flex items-center justify-center w-full">
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <div className="flex items-center border-b border-gray-200 pb-6">
            <img
              src="https://countryflagsapi.com/png/ae"
              alt="Sri Lanka"
              className="w-12 h-12 rounded-fit"
            />
            <div className="flex items-start justify-between w-full">
              <div className="pl-3 w-full">
                <p className="text-xl font-medium leading-5 text-gray-800">
                  Sri Lanka
                </p>
                <p className="text-sm leading-normal pt-2 text-gray-500">
                  36 Team Members
                </p>
              </div>
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                  stroke="#2C3E50"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="px-2">
            <p className="text-sm leading-5 py-4 text-gray-600">
              The Sri Lanka men's national cricket team, nicknamed The Lions,
              represents Sri Lanka in men's international cricket. It is a Full
              Member of the International Cricket Council with Test, One-Day
              International and T20 International status.
            </p>
          </div>
        </div>
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <div className="flex items-center border-b border-gray-200 pb-6">
            <img
              src="https://countryflagsapi.com/png/ae"
              alt="India"
              className="w-12 h-12 rounded-fit"
            />
            <div className="flex items-start justify-between w-full">
              <div className="pl-3 w-full">
                <p className="text-xl font-medium leading-5 text-gray-800">
                  India
                </p>
                <p className="text-sm leading-normal pt-2 text-gray-500">
                  25 members
                </p>
              </div>
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                  stroke="#2C3E50"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="px-2">
            <p className="text-sm leading-5 py-4 text-gray-600">
              The India men's national cricket team, also known as Team India or
              the Men in Blue, represents India in men's international cricket.
              It is governed by the Board of Control for Cricket in India, and
              is a Full Member of the International Cricket Council with Test,
              One Day International and Twenty20 International status.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center justify-center w-full mt-7">
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <div className="flex items-center border-b border-gray-200 pb-6">
            <img
              src="https://countryflagsapi.com/png/ae"
              alt="Pakistan"
              className="w-12 h-12 rounded-fit"
            />
            <div className="flex items-start justify-between w-full">
              <div className="pl-3 w-full">
                <p className="text-xl font-medium leading-5 text-gray-800">
                  Pakistan
                </p>
                <p className="text-sm leading-normal pt-2 text-gray-500">
                  36 members
                </p>
              </div>
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                  stroke="#2C3E50"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="px-2">
            <p className="text-sm leading-5 py-4 text-gray-600">
              The Pakistan national cricket team or Pak cricket team, often
              referred to as the Shaheens, Green Shirts, Men in Green and
              Cornered Tigers is administered by the Pakistan Cricket Board.
            </p>
          </div>
        </div>
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <div className="flex items-center border-b border-gray-200 pb-6">
            <img
              src="https://countryflagsapi.com/png/ae"
              alt="Australia"
              className="w-12 h-12 rounded-fit"
            />
            <div className="flex items-start justify-between w-full">
              <div className="pl-3 w-full">
                <p className="text-xl font-medium leading-5 text-gray-800">
                  Australia
                </p>
                <p className="text-sm leading-normal pt-2 text-gray-500">
                  36 members
                </p>
              </div>
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                  stroke="#2C3E50"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="px-2">
            <p className="text-sm leading-5 py-4 text-gray-600">
              The Australia men's national cricket team represents Australia in
              men's international cricket. As the joint oldest team in Test
              cricket history,
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center justify-center w-full mt-7">
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <div className="flex items-center border-b border-gray-200 pb-6">
            <img
              src="https://countryflagsapi.com/png/ae"
              alt="England"
              className="w-12 h-12 rounded-fit"
            />
            <div className="flex items-start justify-between w-full">
              <div className="pl-3 w-full">
                <p className="text-xl font-medium leading-5 text-gray-800">
                  England
                </p>
                <p className="text-sm leading-normal pt-2 text-gray-500">
                  36 members
                </p>
              </div>
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                  stroke="#2C3E50"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="px-2">
            <p className="text-sm leading-5 py-4 text-gray-600">
              A group of people interested in dogecoin, the currency and a bit
              of side for the meme and dof that we all know and love. These
              cases are perfectly simple and easy to distinguish.
            </p>
          </div>
        </div>
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <div className="flex items-center border-b border-gray-200 pb-6">
            <img
              src="https://countryflagsapi.com/png/ae"
              alt="New Zealand"
              className="w-12 h-12 rounded-fit"
            />
            <div className="flex items-start justify-between w-full">
              <div className="pl-3 w-full">
                <p className="text-xl font-medium leading-5 text-gray-800">
                  New Zealand
                </p>
                <p className="text-sm leading-normal pt-2 text-gray-500">
                  36 members
                </p>
              </div>
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                  stroke="#2C3E50"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="px-2">
            <p className="text-sm leading-5 py-4 text-gray-600">
              The New Zealand national cricket team represents New Zealand in
              men's international cricket. Named the Black Caps, they played
              their first Test in 1930 against England in Christchurch, becoming
              the fifth country to play Test cricket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
