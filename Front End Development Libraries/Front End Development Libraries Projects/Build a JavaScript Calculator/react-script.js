const { useState, useEffect } = React;

const Key = ({ display, value, handler, id, additionalClass = '' }) => (
    <div id={id} className={`key ${additionalClass}`} onClick={() => handler(value)}>
        <span>{display}</span>
    </div>
);

const App = () => {
    const [output, setOutput] = useState(0);
    const [expression, setExpression] = useState('');
    const [display, setDisplay] = useState({ currentDisplay: '0', previousExpression: '' })

    const operatorRegex = /[-+/*]/;
    const numericRegex = /[0-9]/;

    const extractLastNumber = (str) => {
        let currentNumber = str;
        let previousNumber = str;
        let currentDisplay = str;
        const allOperatorMatch = str.match(/[-+/*]/g);
        if (allOperatorMatch) {
            const lastOperator = allOperatorMatch[allOperatorMatch.length - 1];
            const lastOperatorIndex = str.lastIndexOf(lastOperator);
            currentNumber = str.slice(lastOperatorIndex + 1);
            previousNumber = str.slice(0, lastOperatorIndex);
            currentDisplay = str.slice(lastOperatorIndex);
        } else {
            previousNumber = '';
        }
        return { currentNumber, previousNumber, currentDisplay };
    }

    const updateExpression = (str) => {
        if (/^0+$/.test(str)) str = '';
        if (str) {
            const { currentDisplay, previousNumber } = extractLastNumber(str);
            setDisplay({ currentDisplay: currentDisplay.toString(), previousExpression: previousNumber });
        } else {
            setDisplay({ currentDisplay: '0', previousExpression: '' });
        }
        setExpression(str);
    }

    const removeLastChar = (str) => {
        return str.slice(0, str.length - 1);
    }

    const handleOperator = (value) => {
        if (expression.length === 0) {
            updateExpression('0' + value);
            return;
        }
        const lastChar = expression[expression.length - 1];
        if (numericRegex.test(lastChar)) {
            updateExpression(expression + value);
        } else if (lastChar === '.') {
            updateExpression(expression + '0' + value);
        } else if (operatorRegex.test(lastChar)) {
            let str = expression.slice();
            if (/[-+/*]{2}/.test(str)) {
                str = removeLastChar(removeLastChar(str)) + value;
            } else {
                if (value === '-') {
                    str += value
                } else {
                    str = removeLastChar(str) + value;
                }
            }
            updateExpression(str);
        }
    }

    const handleDecimal = () => {
        let currentNumber = extractLastNumber(expression).currentNumber;

        if (!(/\./.test(currentNumber))) {
            updateExpression(expression + '.');
        }
    }

    const handleClick = (value) => {
        if (operatorRegex.test(value)) {
            handleOperator(value);
        } else if (numericRegex.test(value)) {
            updateExpression(expression + value);
        } else if (value === '.') {
            handleDecimal();
        } else if (value === 'AC') {
            updateExpression('');
            setOutput(0);
        } else if (value === 'C') {
            if (expression.length < 2) {
                updateExpression('');
            } else {
                updateExpression(expression.slice(0, -1));
            }
        } else if (value === '=') {
            try {
                const str = expression.replace(/([+-/*])(-)/g, '$1 $2');
                const ans = Math.round(10000000 * eval(str)) / 10000000;
                console.log(expression, ' = ', ans);
                setOutput(ans || 0);
                updateExpression((ans || '').toString());
            } catch (exception) {
                setOutput('Error');
                setTimeout(() => setOutput(0), 1000);
            }
        }
    }

    return (
        <div className="wrapper">
            <div className="calc">
                <div className="screen">
                    <div className="expression">
                        {display.previousExpression}
                        <span id="display">{display.currentDisplay}</span>
                    </div>
                    <div className="output">{output}</div>
                </div>
                <div className="keys">
                    <Key display='0' value='0' handler={handleClick} additionalClass='numeric' id="zero" />
                    <Key display='1' value='1' handler={handleClick} additionalClass='numeric' id="one" />
                    <Key display='2' value='2' handler={handleClick} additionalClass='numeric' id="two" />
                    <Key display='3' value='3' handler={handleClick} additionalClass='numeric' id="three" />
                    <Key display='4' value='4' handler={handleClick} additionalClass='numeric' id="four" />
                    <Key display='5' value='5' handler={handleClick} additionalClass='numeric' id="five" />
                    <Key display='6' value='6' handler={handleClick} additionalClass='numeric' id="six" />
                    <Key display='7' value='7' handler={handleClick} additionalClass='numeric' id="seven" />
                    <Key display='8' value='8' handler={handleClick} additionalClass='numeric' id="eight" />
                    <Key display='9' value='9' handler={handleClick} additionalClass='numeric' id="nine" />
                    <Key display='.' value='.' handler={handleClick} additionalClass='numeric' id="decimal" />

                    <Key display='=' value='=' handler={handleClick} additionalClass='operator' id="equals" />
                    <Key display='+' value='+' handler={handleClick} additionalClass='operator' id="add" />
                    <Key display='-' value='-' handler={handleClick} additionalClass='operator' id="subtract" />
                    <Key display='x' value='*' handler={handleClick} additionalClass='operator' id="multiply" />
                    <Key display='/' value='/' handler={handleClick} additionalClass='operator' id="divide" />

                    <Key display='C' value='C' handler={handleClick} additionalClass='additional' id="back" />
                    <Key display='AC' value='AC' handler={handleClick} additionalClass='additional' id="clear" />
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
