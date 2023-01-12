import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useGetNewGoodsQuery } from "../../../../services/HomePageApi";
import Goods from "./Goods";

const GoodsContainer = ({newGoods}) => {
    const {locale} = useRouter()
    const {data, isLoading} = useGetNewGoodsQuery(locale)

    return <Goods {...{goods: (data || newGoods)}} />;
}

export default GoodsContainer;