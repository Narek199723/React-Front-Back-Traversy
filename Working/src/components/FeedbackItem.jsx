import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const FeedbackItem = ({ item, handleDelete }) => {

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default FeedbackItem;
