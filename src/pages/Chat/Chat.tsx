import firestore from '@react-native-firebase/firestore';
import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

interface IUser {
  _id: string | number;
  name: string;
  avatar: string;
}

interface Reply {
  title: string;
  value: string;
  messageId?: any;
}

interface QuickReplies {
  type: 'radio' | 'checkbox';
  values: Reply[];
  keepIt?: boolean;
}

interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: IUser;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: QuickReplies;
}

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc('m1bTtWvCIwYFVvhKBu38')
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            _id: doc?.id,
            user: doc.data().user,
            text: doc.data().text,
            createdAt: new Date(doc.data().createdAt.nanoseconds),
          };
        }) as IMessage[];

        console.log(data);
        setMessages(data);
      });

    return () => subscriber();
  }, []);

  const onSend = useCallback((items = []) => {
    firestore()
      .collection('chats')
      .doc('m1bTtWvCIwYFVvhKBu38')
      .collection('messages')
      .add(items[0])
      .then(() => {
        // Alert.alert('Foi!');
      });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={items => onSend(items)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default Chat;
