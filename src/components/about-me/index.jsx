import React from 'react';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';

const AboutMe = ({ content, loading }) => {
  if (!content) return null;

  return (
    <div className="card compact bg-base-100 shadow">
      <div className="card-body">
        {loading ? (
          skeleton({ width: 'w-52', height: 'h-6' })
        ) : (
          <div className="text-base-content text-opacity-60">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  content: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default AboutMe;
