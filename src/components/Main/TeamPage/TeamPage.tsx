/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable consistent-return */
import { useState } from 'react';
import { ITeam } from '../../../@types/types';
import TeamArticle from './TeamArticle';

import './TeamPage.scss';
import TeamModal from '../Modals/TeamModal/TeamModal';

interface TeamPageProps {
  teams: ITeam[];
}

export default function TeamPage({ teams }: TeamPageProps) {
  const [isTeamModalOn, setIsTeamModalOn] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<ITeam | undefined>(
    undefined
  );

  return (
    <>
      <div className="teams-container">
        {teams.map((team) => {
          return (
            <TeamArticle
              team={team}
              key={team.id}
              setIsTeamModalOn={setIsTeamModalOn}
              setSelectedTeam={setSelectedTeam}
            />
          );
        })}
      </div>
      {isTeamModalOn && selectedTeam && (
        <TeamModal team={selectedTeam} setIsTeamModalOn={setIsTeamModalOn} />
      )}
    </>
  );
}
