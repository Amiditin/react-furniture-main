import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithGoogle, singUserOut } from '../redux/authSlice';
import { toggleOpened } from '../redux/overlaySlice';

import Button from './Button';

function Overlay() {
  const overlayRef = useRef();
  const dispatch = useDispatch();
  const { opened } = useSelector((state) => state.overlay);
  const { user } = useSelector((state) => state.auth);

  return (
    <div
      className={`overlay ${opened && 'overlay-visible'}`}
      onClick={(event) => event.target === overlayRef.current && dispatch(toggleOpened())}
      ref={overlayRef}>
      <div className="rightside-menu">
        <img
          className="rightside-menu__close"
          src="/img/tools-icons/close.svg"
          alt="close"
          onClick={() => dispatch(toggleOpened())}
        />
        {user ? (
          <div className="rightside-menu__content">
            <h4 className="rightside-menu__title">Добро пожаловать</h4>
            <div className="rightside-menu__user">
              <img className="rightside-menu__avatar" src={user.photoURL} alt="avatar" />
              <div className="rightside-menu__info">
                <p className="rightside-menu__info-name">{user.displayName}</p>
                <p className="rightside-menu__info-email">{user.email}</p>
              </div>
            </div>
            <div className="rightside-menu__btn">
              <Link to="blog/create" className="rightside-menu__btn-link">
                <Button ClassName="tab" onClick={() => dispatch(toggleOpened())}>
                  Создать пост
                </Button>
              </Link>
              <Button ClassName="black" onClick={() => dispatch(singUserOut())}>
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
              <Button ClassName="black" onClick={() => dispatch(signInWithGoogle())}>
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
