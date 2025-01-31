/* eslint-disable react/prop-types */
const PartialText = (props) => {
    
    const content = props.text;
    const charCount = content.length;
    const n= Math.floor(charCount*props.percent/100)
    const firstNChars = content.slice(0, n);
    const restOfContent = content.slice(n, charCount);
    return (
        <div className="font-playfair bg-transparent text-white text-2xl">
            <span className="text-gray-900">
                {firstNChars}
            </span>
            {restOfContent}
        </div>
    );
}

export default PartialText;