import React from 'react';
import PropTypes from 'prop-types';

import AuthorCard from './AuthorCard';

const styles = {
  root: {
    margin: '10px 0px',
  },
};

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
  }

  toggleShowAll() {
    this.setState({
      showAll: !this.state.showAll
    });
  }

  render() {
    if (!this.props.authors)
      return <div>Empty authors</div>;

    const { authors } = this.props;
    const { showAll } = this.state;

    const showedAuthors = 
      showAll ? authors : authors.slice(0, 3);
  
    return (
      <div style={styles.root}>
        {
          showedAuthors.map((author) => (
            <div key={author.email}>
              <AuthorCard author={author} />
            </div>
          ))
        }
        <button onClick={() => this.toggleShowAll()}>Show all</button>
      </div>
    );
  }
}

AuthorsList.propTypes = {
  authors: PropTypes.array,
};

export default AuthorsList;
