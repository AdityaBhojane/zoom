
interface ButtonProps {
    label:string,
    onClick:()=>void,
    Style:string
}

const Button = ({ label, onClick,Style }:ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 ${Style=="create"? "bg-orange-500 hover:bg-orange-600":"bg-blue-500 hover:bg-blue-600"} text-white font-medium rounded-md shadow  `}
    >
      {label}
    </button>
  );
};

export default Button;
