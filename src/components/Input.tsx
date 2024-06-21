type InputProps = {
  img: {
    src: string;
    alt: string;
  };
  input: {
    type: string;
    name: string;
    placeholder: string;
  };
  label: string;
  isToggler: boolean;
  onTogglerHandler: (e: React.MouseEvent) => void;
};

function Input(props: InputProps) {
  const { img, input, label, isToggler, onTogglerHandler } = props;
  return (
    <>
      <label htmlFor={input.name}>{label}</label>
      <div>
        <img src={img.src} alt={img.alt} />
        <input type={input.type} id={input.name} name={input.name} placeholder={input.placeholder} />
        {isToggler && <div onClick={onTogglerHandler}>{/* Toggled Element */}</div>}
      </div>
    </>
  );
}

export default Input;
