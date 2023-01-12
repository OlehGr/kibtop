import Text from "../../../Elementes/Text/Text";

const AvtoParameter = ({categoryName, subCategoryName, brand, mileage, year}) => {
    return (
        <>
            <div className="detail-parameter">
                <h4 className="detail-title"><Text content="parameter" /></h4>

                <div className="detail-parameter__grid detail-parameter__grid--avto">
                    <p className="detail-tag-text">
                        <Text content="Category" />:<span className="detail-tag-text--black">Electronics</span>
                    </p>

                    <p className="detail-tag-text">
                        <Text content="Brand" />:<span className="detail-tag-text--black">TV / Photo / Video / Audio</span>
                    </p>

                    <p className="detail-tag-text">
                        <Text content="Year" />:<span className="detail-tag-text--black">TV / Photo / Video / Audio</span>
                    </p>

                    <p className="detail-tag-text">
                        <Text content="Car type" />:<span className="detail-tag-text--black">TV / Photo / Video / Audio</span>
                    </p>

                    <p className="detail-tag-text">
                        <Text content="Mileage" />:<span className="detail-tag-text--black">TV / Photo / Video / Audio</span>
                    </p>
                </div>
                
                
            </div>
        </>
    );
}

export default AvtoParameter;