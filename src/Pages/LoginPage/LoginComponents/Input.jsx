import './input.css'
function Input({type, placeholder}) {
    return (
        <div className="inputWrapper">
            <input type={type} className='searchInput' placeholder={placeholder} required/>
        </div>
    );
}

export default Input;