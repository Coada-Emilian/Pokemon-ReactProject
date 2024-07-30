/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { ITeam } from '../../../@types/types';
import getAllTeams from '../../Api/Teams/getAllTeams';
import TeamArticle from '../Templates/TeamArticle';

import './TeamPage.scss';

export default function TeamPage() {
  const [teamData, setTeamData] = useState<ITeam[]>([]);

  useEffect(() => {
    try {
      const fetchTeamData = async () => {
        const data = await getAllTeams();
        if (data) {
          setTeamData(data);
        } else {
          console.log('Failed to fetch team data');
        }
      };
      fetchTeamData();
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }, []);

  return (
    <div className="teams-container">
      {teamData.map((team) => {
        return <TeamArticle team={team} key={team.id} />;
      })}
    </div>
  );
}
