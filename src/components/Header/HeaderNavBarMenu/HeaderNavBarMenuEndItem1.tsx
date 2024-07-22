import CreateTeamButton from "../../Buttons/CreateTeamButton";
import SignInButton from "../../Buttons/SignInButton";
import SignUpButton from "../../Buttons/SignUpButton";
import TeamButton from "../../Buttons/TeamButton";

export default function HeaderNavBarMenuEndItem1() {
  return (
    <div className="buttons">
      <CreateTeamButton />
      <TeamButton />
      <SignUpButton />
      <SignInButton />
    </div>
  );
}
