/* eslint-disable react/prop-types */
const PartialText = (props) => {
    const content = props.text;
    const charCount = content.length;
    const n = Math.floor(charCount * props.percent / 100);
    const visibleText = content.slice(0, n);
    const hiddenText = content.slice(n);

    return (
        <div className="font-lato font-bold bg-transparent text-4xl" style={{ color: props.bgcolor }}>
            <span style={{ color: props.txtcolor }}>
                {visibleText}
            </span>
            {hiddenText}
        </div>
    );
}

export default PartialText;