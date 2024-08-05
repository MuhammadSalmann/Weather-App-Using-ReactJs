export default function Button() {
    const handleClick = (event) => {
        alert('Button clicked');
        console.log(event);
    }
    const handleMouseOver = (event) => {
        console.log('Mouse over');
        console.log(event);
    }
    const handleDbClick = (event) => {
        alert('Double click');
        console.log(event);
    }

    return (
        <>
        <button onClick={handleClick}>Click me</button>
        <p onMouseOver={handleMouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum placeat beatae eos neque officia necessitatibus facilis rerum maxime magni natus error officiis, sint provident voluptatem inventore a voluptate reiciendis in.</p>
        <button onDoubleClick={handleDbClick}>Double Click</button>
        </>
    );
}