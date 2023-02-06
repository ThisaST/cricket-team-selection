import React, { useState } from 'react';
import DropDown from '../../shared/Dropdown';
import { uniqBy } from 'lodash';

type Player = {
  id: string;
  name: string;
  playerType: string;
  sort: number;
}

const players: Array<Player> = [
  {
    id: '1',
    name: 'TM Dilshan',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '2',
    name: 'DPMD Jayawardene',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '3',
    name: 'ST Jayasuriya',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '4',
    name: 'MDKJ Perera',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '5',
    name: 'I Udana',
    playerType: 'BOWLER',
    sort: 0
  },
  {
    id: '6',
    name: 'AD Mathews',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '7',
    name: 'BKG Mendis',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '8',
    name: 'KC Sangakkara',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '9',
    name: 'DM de Silva',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '10',
    name: 'MD Shanaka',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '12',
    name: 'SL Malinga',
    playerType: 'BOWLER',
    sort: 0
  },
  {
    id: '13',
    name: 'HMRKB Herath',
    playerType: 'BOWLER',
    sort: 0
  },
  {
    id: '14',
    name: 'C Vaas',
    playerType: 'BOWLER',
    sort: 0
  },
  {
    id: '15',
    name: 'A Mendis',
    playerType: 'BOWLER',
    sort: 0
  },
  {
    id: '16',
    name: 'M Muralidaran',
    playerType: 'BOWLER',
    sort: 0
  },
  {
    id: '17',
    name: 'A De Silva',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '18',
    name: 'C Silva',
    playerType: 'BOWLER',
    sort: 0
  },
  {
    id: '19',
    name: 'C Kapugedara',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '20',
    name: 'N Kulasekara',
    playerType: 'BOWLER',
    sort: 0
  },
  {
    id: '21',
    name: 'B Rajapaksha',
    playerType: 'BATSMAN',
    sort: 0
  },
  {
    id: '22',
    name: 'D Gunatilake',
    playerType: 'BATSMAN',
    sort: 0
  },
];

function TeamDetails() {
  const [persistedPlayers, setPersistedPlayers] = useState<Array<Player>>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<Array<Player>>([]);

  const updateSelectedPlayers = (player: Player) => {
    const uniqueSelected = uniqBy(
      [...selectedPlayers, player],
      'id'
    );
    setSelectedPlayers(uniqueSelected);
  };
  
  const handleSortPlayers = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const batsmen = selectedPlayers.filter((player) => player.playerType === 'BATSMAN');
    const bowlers = selectedPlayers.filter((player) => player.playerType === 'BOWLER');
    let shuffledBatsmen = batsmen
      .map(batsman => ({ ...batsman, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort);
    let shuffledBowlers = bowlers
      .map(bowler => ({ ...bowler, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort);
    setPersistedPlayers([...shuffledBatsmen, ...shuffledBowlers]);
  };

  return (
    <>
      <div className="lg:flex items-center justify-center w-full">
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <form onSubmit={handleSortPlayers}>
            <div className="flex items-start justify-between w-full mb-4">
              <div className="flex w-full items-center border-b border-gray-200 pb-6">
                <div className="pl-3 w-full">
                  <p className="text-xl font-medium leading-5 text-gray-800">
                    Sri Lanka
                  </p>
                  <p className="text-sm leading-normal pt-2 text-gray-500">
                    36 Team Members
                  </p>
                  <div className='flex w-full justify-between mt-3'>
                    <DropDown />
                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {players.map((player) => (
              <div className="flex items-center mb-4">
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium "
                >
                <input
                  id="default-checkbox"
                  type="checkbox"
                  name="playerCheckbox"
                  value=""
                  onChange={() => updateSelectedPlayers(player)}
                  className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                  {player.name}
                </label>
              </div>
            ))}
          </form>
        </div>

        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <div className="flex items-start justify-between w-full mb-4">
            <div className="flex w-full items-center border-b border-gray-200 pb-6">
              <div className="pl-3 w-full">
                <p className="text-xl font-medium leading-5 text-gray-800">
                  Optimal Team
                </p>
              </div>
            </div>
          </div>
          {persistedPlayers.map((player) => (
            <div className="flex items-center mb-4">
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium "
              >
                {player.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TeamDetails;
