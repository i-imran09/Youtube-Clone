//AIzaSyAjXxvXc9RlNp5ITY6uE_-kG0y2P1cY45U
export const API_KEY ='AIzaSyAjXxvXc9RlNp5ITY6uE_-kG0y2P1cY45U';


export const value_converter=(value)=>{
if(value>=1000000){
    return Math.floor(value/1000000)+"M"
}
else if(value>=1000){
    return Math.floor(value/1000)+"K"
}
else{
    return value
}
}