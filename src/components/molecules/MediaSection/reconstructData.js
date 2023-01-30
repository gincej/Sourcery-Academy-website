const reconstructData = (data, theme, setData) => {
  if (theme) {
    const restPagesData = {
      images: [
        ...data
          .filter((item) => item.academy === theme && item.type === 'image')
          .slice(0, 5),
      ],
      video: [
        ...data.filter(
          (item) => item.academy === theme && item.type === 'video'
        ),
      ],
    };
    setData(restPagesData);
  } else {
    const homePageData = {
      images: [
        ...data
          .filter(
            (item) => item.academy === 'frontend' && item.type === 'image'
          )
          .slice(5),
        ...data
          .filter((item) => item.academy === 'testers' && item.type === 'image')
          .slice(5, 7),
      ],
      video: [
        ...data.filter(
          (item) => item.academy === 'testers' && item.type === 'video'
        ),
      ],
    };
    setData(homePageData);
  }
};

export default reconstructData;
