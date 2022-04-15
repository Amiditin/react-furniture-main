import React from 'react';
import { Link } from 'react-router-dom';
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
        {isAuth && auth.currentUser ? (
          <div className="rightside-menu__content">
            <h4 className="rightside-menu__title">Добро пожаловать</h4>
            <div className="rightside-menu__user">
              <img
                className="rightside-menu__avatar"
                src={auth.currentUser.photoURL}
                alt="avatar"
              />
              <div className="rightside-menu__info">
                <p className="rightside-menu__info-name">{auth.currentUser.displayName}</p>
                <p className="rightside-menu__info-email">{auth.currentUser.email}</p>
              </div>
            </div>
            <div className="rightside-menu__btn">
              <Link to="blog/create" className="rightside-menu__btn-link">
                <Button ClassName="tab" onClick={closeOverlay}>
                  Создать пост
                </Button>
              </Link>
              <Button ClassName="black" onClick={singUserOut}>
                Выйти
              </Button>
            </div>
          </div>
        ) : (
          <div className="rightside-menu__content">
            <h4 className="rightside-menu__title">Furniture for life</h4>
            <p className="rightside-menu__text">
              Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb
              everyday carry +1 art party microdosing, put a bird on it brooklyn
            </p>
            <div className="rightside-menu__btn">
              <Button ClassName="black" onClick={signInWithGoogle}>
                Войти
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Overlay;
