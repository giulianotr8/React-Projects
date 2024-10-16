import '../Style-sheets/Button.css'

function Button({handleClick, children}) {
  
  const isOperator = function(val) {
    return isNaN(val) && val!="." && val!="=";
  };
  
  return (
    <div className={`button ${isOperator(children) ? "operator" : null}`} onClick={()=>handleClick(children)}>
      {children}
    </div>
  );
}

export default Button;