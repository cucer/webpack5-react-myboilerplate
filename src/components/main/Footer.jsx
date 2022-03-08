import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

Footer.propTypes = {
  name: PropTypes.string,
};

export default Footer;
