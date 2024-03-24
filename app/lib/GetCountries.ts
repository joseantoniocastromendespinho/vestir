import countries from "world-countries";

 const countriesFormat = countries.map((item)=>({
    value:item.cca2,
    label:item.name.common,
    flag:item.flag,
    latLang:item.latlng,
    region:item.region


}));

export const UseCoutries =()=>{

    const getCoutries =() =>countriesFormat
    const getCoutriesByValue=(value:string)=>{
        return countriesFormat.find((item)=>item.value ===value)
    }
    return{
        getCoutries,
        getCoutriesByValue

    }
}