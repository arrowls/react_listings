import ListingItem from "./ListingItem";

function Listing({items}) {
    return (
        items.map((item) => <ListingItem item={item} key={item.listing_id} />)
    );
}

export default Listing;
