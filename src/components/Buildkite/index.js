import React from 'react';

const BuildkiteDashboard = () => {
  const apiKey = process.env.REACT_APP_BUILDKITE_API_KEY;
  
  return (
    <h3>
      Alrighty? {apiKey}
    </h3>
  );
};

export default BuildkiteDashboard;
