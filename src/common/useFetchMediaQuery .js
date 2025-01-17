import React, { useState,useEffect } from 'react';
const MediaQuery=(query,defaultMatches=window.matchMedia(query))=>{
    const [matches,setMatches]=useState(defaultMatches);
    useEffect(() => {
      const media = window.matchMedia(query);

      if (media.matches !== matches) setMatches(media.matches);
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => {
        media.removeListener(listener);
      };
    }, [query, matches]);

    return matches;
};

export default MediaQuery;