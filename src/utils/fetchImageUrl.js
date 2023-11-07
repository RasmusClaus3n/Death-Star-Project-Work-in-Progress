export const fetchImageURL = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const callbackName = 'jsonpCallback';
    const script = document.createElement('script');
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=allimages&aifrom=${searchTerm}&ailimit=1&callback=${callbackName}`;

    script.src = apiUrl;

    window[callbackName] = (data) => {
      const imageURL = data.query.allimages[0].url;
      resolve(imageURL);
      document.body.removeChild(script);
      delete window[callbackName];
    };

    script.onerror = (error) => {
      reject(error);
      document.body.removeChild(script);
      delete window[callbackName];
    };

    document.body.appendChild(script);
  });
};
