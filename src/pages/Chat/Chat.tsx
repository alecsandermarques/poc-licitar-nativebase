import firestore from '@react-native-firebase/firestore';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import UserContext from '../../context/UserContext';

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

const Chat = ({route}: any) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const {processId} = route.params;
  const {state: userState} = useContext(UserContext);

  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc(`${processId}`)
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
  }, [processId]);

  const onSend = useCallback(
    (items = []) => {
      firestore()
        .collection('chats')
        .doc(`${processId}`)
        .collection('messages')
        .add(items[0]);
    },
    [processId],
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={items => onSend(items)}
      user={{
        _id: userState.id,
        name: userState.name.split(' ')[0],
        avatar: userState.avatar,
      }}
      showUserAvatar
      renderUsernameOnMessage
    />
  );
};

export default Chat;
