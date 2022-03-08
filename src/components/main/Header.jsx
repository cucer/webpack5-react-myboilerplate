import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
