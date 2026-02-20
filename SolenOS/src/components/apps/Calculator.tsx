import { motion } from 'framer-motion';
import { useState } from 'react';
import { Delete } from 'lucide-react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = parseFloat(previousValue);
      let result: number;

      switch (operation) {
        case '+':
          result = currentValue + inputValue;
          break;
        case '-':
          result = currentValue - inputValue;
          break;
        case '×':
          result = currentValue * inputValue;
          break;
        case '÷':
          result = currentValue / inputValue;
          break;
        default:
          result = inputValue;
      }

      setDisplay(String(result));
      setPreviousValue(String(result));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = () => {
    if (!operation || previousValue === null) return;

    const inputValue = parseFloat(display);
    const currentValue = parseFloat(previousValue);
    let result: number;

    switch (operation) {
      case '+':
        result = currentValue + inputValue;
        break;
      case '-':
        result = currentValue - inputValue;
        break;
      case '×':
        result = currentValue * inputValue;
        break;
      case '÷':
        result = currentValue / inputValue;
        break;
      default:
        result = inputValue;
    }

    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  const toggleSign = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const inputPercent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  const buttons = [
    { label: 'C', onClick: clear, type: 'function' },
    { label: '±', onClick: toggleSign, type: 'function' },
    { label: '%', onClick: inputPercent, type: 'function' },
    { label: '÷', onClick: () => performOperation('÷'), type: 'operator' },
    { label: '7', onClick: () => inputDigit('7'), type: 'number' },
    { label: '8', onClick: () => inputDigit('8'), type: 'number' },
    { label: '9', onClick: () => inputDigit('9'), type: 'number' },
    { label: '×', onClick: () => performOperation('×'), type: 'operator' },
    { label: '4', onClick: () => inputDigit('4'), type: 'number' },
    { label: '5', onClick: () => inputDigit('5'), type: 'number' },
    { label: '6', onClick: () => inputDigit('6'), type: 'number' },
    { label: '-', onClick: () => performOperation('-'), type: 'operator' },
    { label: '1', onClick: () => inputDigit('1'), type: 'number' },
    { label: '2', onClick: () => inputDigit('2'), type: 'number' },
    { label: '3', onClick: () => inputDigit('3'), type: 'number' },
    { label: '+', onClick: () => performOperation('+'), type: 'operator' },
    { label: '0', onClick: () => inputDigit('0'), type: 'number', wide: true },
    { label: '.', onClick: inputDecimal, type: 'number' },
    { label: '=', onClick: calculate, type: 'equals' },
  ];

  return (
    <div className="calculator">
      <div className="display">
        <motion.div
          key={display}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="display-value"
        >
          {display}
        </motion.div>
      </div>

      <div className="buttons">
        {buttons.map((button, index) => (
          <motion.button
            key={index}
            className={`btn ${button.type} ${button.wide ? 'wide' : ''}`}
            onClick={button.onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.02 }}
          >
            {button.label === 'C' && button.type === 'function' ? (
              <Delete size={20} />
            ) : (
              button.label
            )}
          </motion.button>
        ))}
      </div>

      <style>{`
        .calculator {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 16px;
          background: var(--background-dark);
        }

        .display {
          flex: 1;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 20px;
          background: var(--background-light);
          border-radius: var(--radius-lg);
          margin-bottom: 16px;
          overflow: hidden;
        }

        .display-value {
          font-size: 48px;
          font-weight: 300;
          color: var(--text-primary);
          text-align: right;
          word-break: break-all;
          line-height: 1.2;
        }

        .buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .btn {
          aspect-ratio: 1;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 22px;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn.wide {
          grid-column: span 2;
          aspect-ratio: auto;
        }

        .btn.number {
          background: var(--background-card);
          color: var(--text-primary);
        }

        .btn.number:hover {
          background: var(--background-hover);
        }

        .btn.function {
          background: var(--background-hover);
          color: var(--text-primary);
        }

        .btn.function:hover {
          background: var(--border-color);
        }

        .btn.operator {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
        }

        .btn.operator:hover {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .btn.equals {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
        }

        .btn.equals:hover {
          background: linear-gradient(135deg, #16a34a, #15803d);
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
        }
      `}</style>
    </div>
  );
}
