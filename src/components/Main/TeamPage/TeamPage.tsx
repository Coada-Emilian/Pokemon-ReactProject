/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable consistent-return */
import { ITeam } from '../../../@types/types';
import TeamArticle from '../Templates/TeamArticle';

import './TeamPage.scss';

interface TeamPageProps {
  teams: ITeam[];
}

export default function TeamPage({ teams }: TeamPageProps) {
  return (
    <div className="teams-container">
      {teams.map((team) => {
        return <TeamArticle team={team} key={team.id} />;
      })}
    </div>
  );
}
