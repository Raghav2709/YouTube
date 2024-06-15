export const API_Key = 'AIzaSyDHifCnLGncOHUv-lJP-K_Rtqod2YcSarQ'

export const valueConverter = (value) => {
   if (value >= 1000000) {
    return Math.floor(value/1000000) + "M"
   }
   else if(value >= 1000){
    return Math.floor(value/1000) + "K"
   }
   else{
    return value
   }
}