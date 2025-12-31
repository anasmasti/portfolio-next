import PropTypes from "prop-types";

export default function MainTitle({ title }) {
  return (
    <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold md:w-1/2 lg:w-1/2">{title}</h2>
  );
}

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
