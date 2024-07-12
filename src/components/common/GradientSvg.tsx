function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(90)`;
    return (
        <svg style={{ height: 0, width: 0 }}>
            <defs>
                <linearGradient id={idCSS} gradientTransform={gradientTransform}>
                    <stop offset="16.29%" stopColor="#9CE324" />
                    <stop offset="100%" stopColor="#E32929" />
                </linearGradient>
            </defs>
        </svg>
    );
}
export default GradientSVG