
 export default function getRandomInt(min, max, amount) {
    function random(min,max){
      min = Math.ceil(min);
      max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var ran=[]
  for (var i = 0; i < amount; i++) {
       
    ran.push(random(min, max).toString());
    ran.push(", ")
        }
  return(ran)
}
