
function ListingItem({item}) {

    function getLevel(quantity) {
        if (quantity <= 10) return 'low';
        if (quantity > 20) return 'high';
        return 'medium';
    }

    function getTitle(title) {
        if (title?.length > 50) {
            return title.slice(0, 49) + '...';
        }
        return title;
    }

    function getPrice({price = '000', currency_code = '$'}) {
        if (currency_code.toLowerCase() === 'usd') return '$' + price;
        if (currency_code.toLowerCase() === 'usd') return  '€' + price;
        if (currency_code.toLowerCase() === 'gbp') return price + ' GBP';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item?.MainImage?.url_570xN} alt=""/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{getTitle(item.title)}</p>
                <p className="item-price">{getPrice(item)}</p>
                <p className={`item-quantity level-${getLevel(item.quantity)}`}>{item.quantity} left</p>
            </div>
        </div>
    );
}

export default ListingItem;
