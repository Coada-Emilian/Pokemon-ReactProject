export default function TeamArticle() {
  return (
    <article className="team-article" slot="team_article">
      <div className="team-title">
        <p className="title" slot="team_title">
          title
        </p>
      </div>

      <div id="team-article-content">
        <div className="team_trainer">
          <div className="card trainer-icon" slot="team_id">
            <div className="card-image">
              <figure className="image is-64x64">
                <img
                  src=""
                  alt=""
                  slot="trainer_image"
                  className="trainer-image"
                />
              </figure>
            </div>
          </div>
        </div>

        <div id="team-pokemon" slot="team_pokemon"></div>
      </div>
    </article>
  );
}
