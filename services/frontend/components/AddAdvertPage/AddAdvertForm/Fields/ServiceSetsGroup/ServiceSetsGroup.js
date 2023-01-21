import { useCallback } from "react";
import { useCurrency } from "../../../../../locales/hooks/useCurrency";
import Text from "../../../../Elementes/Text/Text";
import ServiceSetsCheck from "./ServiceSetsCheck";

const ServiceSetsGroup = ({setLiftValue, setTopValue, setVipValue, fullPrice, addFullPrice}) => {
    const {currency, countCurrencyPrice} = useCurrency()

    return (
        <>
            <div className="radio-group radio-group--width">
                <ServiceSetsCheck {...{price: 8, text: 'TOP ad for 7 days', value: 7, 
                                        onServiceSet: setTopValue, addFullPrice}} />

                <ServiceSetsCheck {...{price: 25, text: 'TOP ad for 30 days', value: 30, 
                                        onServiceSet: setTopValue, addFullPrice}} />

                <ServiceSetsCheck {...{price: 10, text: '9 lifts in the up issue', value: 9, 
                                        onServiceSet: setLiftValue, addFullPrice}} />

                <ServiceSetsCheck {...{price: 30, text: 'VIP ad for 7 days', value: 7,
                                        onServiceSet:  setVipValue, addFullPrice}} />

                <div className="width-line" />

                <div className="flex">
                    <button className="reg-btn reg-btn--price" onClick={e => e.preventDefault()}>
                        <Text content="Enable" />
                    </button>

                    <p className="promote-card__cost">
                        <Text content="total" />: {currency}{countCurrencyPrice(fullPrice, '$')}
                    </p>
                </div>
            </div>
        </>
    );
}

export default ServiceSetsGroup;