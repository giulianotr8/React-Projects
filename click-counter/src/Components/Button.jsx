import '../Style-Sheets/Button.css';

function Button({text, isCountButton, handleClick}) {
  return (
    <button className={isCountButton ? "add" : "reset"} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;