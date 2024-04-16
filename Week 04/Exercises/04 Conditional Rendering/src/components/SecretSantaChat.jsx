import secretSantaGift from '../utils/secretSanta';
import ChatFrame from './ChatFrame';
import NewMessage from './NewMessage';

const SecretSantaChat = () => {
  const wishlist = 'Add your gift here';

  const gift = secretSantaGift(wishlist);

  return (
    <>
      <ChatFrame>
        <NewMessage>Hey there</NewMessage>
        <NewMessage>How are you?</NewMessage>
      </ChatFrame>
    </>
  );
};

export default SecretSantaChat;
