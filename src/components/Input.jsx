function Input(props){
    return(
       <>
            <input className="w-[100%] h-[55px] p-2 rounded-2xl bg-[rgba(255,255,255,0.1)] border border-white"
             name={props.name}
             id={props.id}
             placeholder={props.placeholder}
            ></input>
       </>
    )
}

export default Input;