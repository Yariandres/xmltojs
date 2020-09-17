import React, {Fragment} from 'react';
import AppNav from '../appNav/AppNav';
import Appform from '../appForm/AppForm';
import AppTable from '../appTable/AppTable';

const Home = () => {
  return (
    <Fragment>
       <AppNav/>
       <Appform/>
       <AppTable/>
    </Fragment>
  )
}

export default Home;
