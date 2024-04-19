import secretSantaGift from '../utils/secretSanta';
import ChatFrame from './ChatFrame';
import NewMessage from './NewMessage';
import Ferrari from './Ferrari.jsx';

const SecretSantaChat = () => {
  const wishlist = 'ferrari';

  const gift = secretSantaGift(wishlist);

  return (
    <>
      <ChatFrame>
        <NewMessage>Hey there</NewMessage>
        <NewMessage>How are you?</NewMessage>
        <NewMessage>
          {wishlist === gift
            ? `I have recieved a ${wishlist}, just what i wanted!`
            : `I got a ${gift}`}
        </NewMessage>
        {gift === 'ferrari' && (
          <NewMessage>
            <Ferrari />
          </NewMessage>
        )}
      </ChatFrame>
    </>
  );
};

export default SecretSantaChat;
