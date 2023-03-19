const Button = ({ children, ...rest }) => {
      return <button className="bg-blue-600 px-3 py-1.5 hover:bg-blue-700 rounded-md text-white" {...rest}>{children}</button>
};

export default Button;