import './input.css'
function Input({type, placeholder, onChange, value, styleWrp, name}) {
    return (
        <div className={`inputWrapper ${styleWrp}`}>
            <input type={type} className='searchInput' placeholder={placeholder} onChange={onChange} value={value} name={name} required/>
        </div>
    );
}

export default Input;