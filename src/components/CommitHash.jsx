import React, { useState, useEffect } from 'react';

const CommitHash = () => {
  const [commitSha, setCommitSha] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); //start by assuming loading obvi
  useEffect(() => {
    const fetchCommit = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/joysudo/personal-website/commits?per_page=1');
        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}.`);
        }
        const data = await response.json();
        setCommitSha(data[0].sha.substring(0, 7));
      } catch (err) {
        setError("Fetching the commit hash returned " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommit();
  }, []); // empty dependency array so it only runs after initial rendering
  
  if (loading) {
    return <i>Loading commit...</i>;
  }

  if (error) {
    return <i>{error}</i>;
  }
  
  return (<i>Current commit: <a href={`https://github.com/joysudo/personal-website/commit/${commitSha}`} style={{mouse: 'cursor', textStyle: 'underline'}}>{commitSha}</a></i>);
  // i really should just style this in the css file, but i don't want to! so i'm going to write inline styling in the homepage and this component. redundantly.
}

export default CommitHash;