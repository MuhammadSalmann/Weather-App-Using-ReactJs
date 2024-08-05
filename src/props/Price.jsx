export default function Price({ oldPrice, newPrice }) {
    let styleOldPrice = {
        color: newPrice > 100 ? 'red' : 'green',
        textDecoration:  'line-through',
        marginRight: '10px'
    };
    let styleNewPrice = {
        color: newPrice > 100 ? 'red' : 'green',
        marginRight: '10px'
    };
    return (
        <div>
            <span style={styleOldPrice}> {oldPrice} </span>
            <span style={styleNewPrice}> {newPrice} </span>
        </div>
    );
}