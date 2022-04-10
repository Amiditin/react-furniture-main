import React from 'react';
import classNames from 'classnames';

import { auth, provider } from '../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';

import Button from './Button';

function Overlay({ opened, onClickClose }) {
  const rightsideMenuRef = React.useRef();

  const [isAuth, setIsAuth] = React.useState(localStorage.getItem('isAuth') === 'true');

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
    });
  };

  const singUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  };

  const closeOverlay = () => {
    document.body.removeEventListener('click', handleOnClickOverlay);
    onClickClose();
  };

  const handleOnClickOverlay = (event) => {
    if (!event.path.includes(rightsideMenuRef.current)) {
      closeOverlay();
    }
  };

  React.useEffect(() => {
    opened && document.body.addEventListener('click', handleOnClickOverlay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  return (
    <div className={classNames('overlay', { 'overlay-visible': opened })}>
      <div className="rightside-menu" ref={rightsideMenuRef}>
        <img
          className="rightside-menu__close"
          src="/img/close.svg"
          alt="close"
          onClick={closeOverlay}
        />
        <div className="rightside-menu__content">
          <h4 className="rightside-menu__title">Furniture for life</h4>
          <p className="rightside-menu__text">
            Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb
            everyday carry +1 art party microdosing, put a bird on it brooklyn
          </p>
          <div className="rightside-menu__btn">
            {isAuth === true ? (
              <Button ClassName="black" onClick={singUserOut}>
                Выйти
              </Button>
            ) : (
              <Button ClassName="black" onClick={signInWithGoogle}>
                Войти
              </Button>
            )}
          </div>
          <img className="rightside-menu__img" src="/img/furtniture/1.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Overlay;
