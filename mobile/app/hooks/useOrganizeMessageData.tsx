import { useEffect, useState } from 'react';
import { MessageType, MessageData, MessageTypeEnum } from '../types/basic';
import { getDateTag } from '../utils/date';

const useOrganizeMessageData = (messageData: MessageType[]) => {
  const [data, setData] = useState<MessageData[]>([]);

  useEffect(() => {
    // Step 1: Create a temporary object to group messages by date
    const messagesByDate: any = {};

    // Step 2: Loop through the message data array
    messageData.forEach(message => {
      const date = getDateTag(message.date);
      console.log('date', date);
      if (!messagesByDate[date]) {
        messagesByDate[date] = [];
      }
      messagesByDate[date].push(message);
    });
    // Step 3: Create a new array with grouped messages and date tag
    const organizedMessageData = [];
    for (const date in messagesByDate) {
      organizedMessageData.push({
        type: MessageTypeEnum.tag,
        tag: date,
      });
      organizedMessageData.push(...messagesByDate[date]);
    }

    setData(organizedMessageData);
  }, []);

  return data;
};

export default useOrganizeMessageData;
