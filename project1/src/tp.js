export function TP_fonction2() {
    // State to manage the value
    const [value, setValue] = useState(0);
    const [color, setColor] = useState('black');
  
    const handleIncrement = () => {
      setValue(value + 1);
      updateColor(value + 1);
    };
  
    const handleDecrement = () => {
      setValue(value - 1);
      updateColor(value - 1);

    };
  
    const handleInitialize = () => {
      setValue(0);
      setColor("black")
    };
    const updateColor = (newValue) => {
        if (newValue <= -1) {
          setColor('red');
        } else if (newValue > 20) {
          setColor('green');
        } else {
          setColor('black');
        }
    };
  
    return (
      <div>
        <div style={{color}}>{value}</div>
  
        <button onClick={handleIncrement}>Incrementer</button>
        <button onClick={handleDecrement}>Decrementer</button>
        <button onClick={handleInitialize}>Initialiser</button>
      </div>
    );
  }