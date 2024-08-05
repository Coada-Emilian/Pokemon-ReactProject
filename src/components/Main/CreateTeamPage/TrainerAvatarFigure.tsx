/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import imageSource from '../../../assets/img/trainers/trainer(1).jpg';

interface TrainerAvatarFigureProps {
  id: number;
  setIsAddPokemonButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  setTrainerImageIdArray: React.Dispatch<React.SetStateAction<number[]>>;
  trainerImageIdArray: number[];
  setChosenAvatarId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function TrainerAvatarFigure({
  id,
  setIsAddPokemonButtonShown,
  setTrainerImageIdArray,
  trainerImageIdArray,
  setChosenAvatarId,
}: TrainerAvatarFigureProps) {
  const trainerImgSrc = `${imageSource.slice(0, 33)}${id}).jpg`;
  return (
    <Link
      to="#"
      onClick={() => {
        setIsAddPokemonButtonShown(true);
        const newArray = trainerImageIdArray.filter(
          (identifier) => identifier !== id
        );
        setTrainerImageIdArray(newArray);
        setChosenAvatarId(id);
      }}
    >
      <figure className="article-image">
        <img
          src={trainerImgSrc}
          alt="trainer"
          slot="trainer_image"
          className="trainer-image"
        />
      </figure>
    </Link>
  );
}
