import React from 'react';
import {  navItems } from './Data';

export const GeneralService = () => {

  const getNavItemsList = async () => {
    // let apiOptions: any = {
    //   url: `collections/heropanels/query`,
    //   method: 'post',
    //   data: inputData 
    // };
    //let result = await apiClient.doAction(apiOptions);
    return navItems;
  }

    return { getNavItemsList  };
}