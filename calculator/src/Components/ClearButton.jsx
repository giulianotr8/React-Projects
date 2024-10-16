import '../Style-sheets/ClearButton.css'

function ClearButton({handleClick, children}) {
  return (
    <div className="clear-button" onClick={handleClick}>{children}</div>
  );
}

export default ClearButton;