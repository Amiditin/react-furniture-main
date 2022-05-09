import Button from './Button';

function ConfirmRequest({ onConfirm, onCancel, message }) {
  return (
    <div>
      <div className="confirm-request">
        <span className="confirm-request__title">{message}</span>
        <div className="confirm-request__buttons">
          <Button ClassName="tab" onClick={onCancel}>
            Отмена
          </Button>
          <Button ClassName="black" onClick={onConfirm}>
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRequest;
