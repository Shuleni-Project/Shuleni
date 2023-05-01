export default function Input({
    changeFunction,
    placeholder,
    label,
    type = "text",
    name,
  }) {
    return (
      <label htmlFor={name} className="block w-full p-2">
        <span className="text-gray-700 text-lg font-bold">{label}</span>
        <input required autoComplete="off" defaultValue="" name={name} onBlur={changeFunction} id={name} type={type} 
        className='flex flex-shrink m-2 mb-4 w-[90%] rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder={placeholder}/>
      </label>
    )
  }
  