let h = now.getHours();
let ba ="";
if(h>0 && h<12) {
    ba = "오전";
} else {
    ba = "오후";
    h = h - 12;
}
let hhh = String(h).padStart(2,0);
console.log(`지금은 ${ba} ${hhh}시 ${m}분 ${s}초`)