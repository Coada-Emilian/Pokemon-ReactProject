/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable consistent-return */
import { ITeam } from '../../../@types/types';
import TeamArticle from './TeamArticle';

import './TeamPage.scss';

interface TeamPageProps {
  teams: ITeam[];
  createdTeamAvatarSourceArray: string[];
}

export default function TeamPage({
  teams,
  createdTeamAvatarSourceArray,
}: TeamPageProps) {
  console.log(teams);
  return (
    <div className="teams-container">
      {teams.map((team) => {
        return (
          <TeamArticle
            team={team}
            key={team.id}
            createdTeamAvatarSourceArray={createdTeamAvatarSourceArray}
          />
        );
      })}
    </div>
  );
}
