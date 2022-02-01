import './Button.css';

function Button({children, type}) {

    const types = {
        'primary': 'Button--primary',
        'secondary': 'Button--secondary',
    }

    return (
        <button className={`Button ${types[type]}`}>
            {children}
        </button>
    );
}

export { Button }