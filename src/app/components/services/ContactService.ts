import React from 'react';
import { contactData } from './Data';

export const ContactService = () => {

  const getContactList = async () => {
    // let apiOptions: any = {
    //   url: `collections/heropanels/query`,
    //   method: 'post',
    //   data: inputData 
    // };
    //let result = await apiClient.doAction(apiOptions);
    return contactData;
  }

    return { getContactList  };
}