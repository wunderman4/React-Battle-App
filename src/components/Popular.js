import * as api from "../utils/api";
var React = require("react");
var PropTypes = require("prop-types");
//var api = require("../utils/api");

const SelectLanguage = props => {
  const languages = ["All", "JavaScript", "Ruby", "CSS", "Python", "C#"];
  return (
    <ul className="languages">
      {languages.map(lang => {
        return (
          <li
            onClick={props.onSelect.bind(null, lang)}
            key={lang}
            style={
              lang === props.selectedLanguage ? { color: "#FF198E" } : null
            }
          >
            {lang}
          </li>
        );
      })}
    </ul>
  );
};

SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

const RepoGrid = props =>
  <ul className="popular-list">
    {props.repos.map((repo, index) => {
      return (
        <li key={repo.name} className="popular-item">
          <div className="popular-rank">
            #{index + 1}
          </div>
          <ul className="space-list-items">
            <li>
              <img
                className="avatar"
                src={repo.owner.avatar_url}
                alt={"Avatar for " + repo.owner.login}
              />
            </li>
            <li>
              <a href={repo.html_url}>
                {repo.name}
              </a>
            </li>
            <li>
              @{repo.owner.login}
            </li>
            <li>
              {repo.stargazers_count} stars
            </li>
          </ul>
        </li>
      );
    })}
  </ul>;

RepoGrid.PropTypes = {
  repos: PropTypes.array.isRequired
};

class Popular extends React.Component {
  state = {
    selectedLanguage: "All",
    repos: null
  };

  componentDidMount() {
    this.updateLanguage(this.selectedLanguage);
  }

  updateLanguage = lang => {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      };
    });

    api.fetchPopularRepos(lang).then(repos => {
      this.setState(() => {
        return {
          repos: repos
        };
      });
    }); // I may need to add .bind(this)
  };
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos
          ? <p className="loading">LOADING...</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}

export default Popular;
