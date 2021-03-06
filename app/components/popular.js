const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');

let SelectLanguage = (props) => {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="Languages">
      {languages.map(lang => {
        return (
          <li
            className={lang === props.selectedLanguage ? "selected" : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  );
}
SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

let RepoGrid = (props) => {
  return (
    <ul className="RepoList">
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className="Repo">
            <div className="rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img className="avatar" src={repo.owner.avatar_url} alt={`Avatar for ${repo.owner.login}`} />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  );
}
RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      };
    });

    api.fetchPopularRepos(lang)
    .then(repos => {
      this.setState(() => {
        return { repos };
      });
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ? <p>LOADING</p> : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

module.exports = Popular;
