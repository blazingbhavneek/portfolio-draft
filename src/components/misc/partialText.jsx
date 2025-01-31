/* eslint-disable react/prop-types */
const PartialText = (props) => {
    
    const content = props.text;
    const charCount = content.length;
    const n= Math.floor(charCount*props.percent/100)
    const words = content.split(" ");
    const firstNWords = words.slice(0, n).join(" ");
    const restOfContent = words.slice(n).join(" ");

    return (
        <div className="font-lato font-medium bg-transparent text-white text-2xl">
            <span className="text-gray-900">
                {firstNWords}
            </span>
            {restOfContent}
        </div>
    );
}

export default PartialText;