import { categoryTrans, subCategoryTrans } from "./dictionary/CategoryLangDict"
import { conditionTrans, roomsTrans } from "./dictionary/RealtyLangDict"
import { employmentTrans, workTypeTrans } from "./dictionary/WorkLangDict"

export const serializeCreateAdvertData = (data, category, lang) => {


    // const newAdvertData = {
    //     [`title_${lang}`]: data.title,
    //     [`description_${lang}`]: data.description,
    //     [`category_${lang}`]: categoryTrans[lang][data.categoryName],
    //     [`sub_category_${lang}`]: subCategoryTrans[category][lang][data.subCategory],
    //     [`all_old_new_${lang}`]: conditionTrans[lang][data.condition],
    //     brand: data.brand,
    //     mileage: data.mileage,
    //     year: data.year,
    //     [`number_rooms_${lang}`]: roomsTrans[lang][data.rooms],
    //     [`employment_${lang}`]: employmentTrans[lang][data.employment],
    //     [`for_work_type_${lang}`]: workTypeTrans[lang][data.workType],
    //     address: data.address,
    //     city: data.city,
    //     geocode: data.geocode,
    //     upload: data.photos[0],
    //     [`${category}_full_upload`]: [],
    //     user: data.userId,
    //     price: data.cost,
    //     currency: data.currency,
    //     square: data.square,
    //     type_sell: data.isMonth,
    //     "recommend": true,
    //     "publisher": true,
    // }

    const newAdvertData = {
        [`title`]: data.title,
        [`description`]: data.description,
        [`category`]: data.categoryName,
        [`sub_category`]: data.subCategory,
        [`all_old_new`]: data.condition,
        brand: data.brand,
        mileage: data.mileage,
        year: data.year,
        [`number_rooms`]: data.rooms,
        [`employment`]: data.employment,
        [`for_work_type`]: data.workType,
        address: 'Limassol', // Затычка из-за отсутствия доступа к гугл картам
        city: 'Limassol', // Затычка из-за отсутствия доступа к гугл картам
        geocode: '41.01 28.94', // Затычка из-за отсутствия доступа к гугл картам
        upload: data.photos[0],
        [`${category}_full_upload`]: [],
        user: data.userId,
        price: data.cost,
        currency: data.currency,
        square: data.square,
        type_sell: data.isMonth,
        lang,
        "recommend": true,
        "publisher": true,
    }

    const formData = new FormData()

    for (const key in newAdvertData) {
        if(!!newAdvertData[key]) formData.append(key, newAdvertData[key])
    }

    return formData
}

