// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

import { Filter } from './Filter';
import { Location } from './Location';

export const Sidebar = () => {
  // const farms = useSelector(selectFarm);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchFarms());
  // }, [dispatch, isLoadingFarm]);

  return (
    <>
      <Location />
      <Filter />
    </>
  );
};
