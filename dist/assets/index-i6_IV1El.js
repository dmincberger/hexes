import"./modulepreload-polyfill-9p4a8sJU.js";const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAd0SU1FB+gBFgUoKBDy1gcAAANfSURBVGje7dhbTFJxAMdxL5zDynILgXNoawNs9dDlwa11mWlopq4NL1Bm9dZLF21raz6EeUGr9dDa8LYe8rnNNlNDIDUv1Vqi1lM9uFqtqeBCDmgmyuF0ABGUAefPOWyt/X/jFb77uHP8H0hKApv0yuPOuix+MuDbQIYIcxq7jE9U8rQERkSKO4M/LJMtlTJeohKoOKdWP0NRhLmtLGEWcUHd67kVinI7PrZfkifEgmK59UYL5Ztzsr08IRassGHE4vJHSGdCLHxc0fjKSm3Ma8nk2oIXa0etrmCEdH7quJyJcOqQ5DUNhDj8lg5V5g4OI5LiprF51+YIxxa+JL9pcJ4KG6cWn2M1PMKhJZKDU0skB4eWaI4NC9v7JZojaGF178dyrFvY3fuSs81RHRxYaEfzUAwHawvteBPLwdLC1MHKwtTBwsLHmTsCFuCzEo9xf4RbgM9KPp6nHQBweOeYaAd7htl6DjKygD3D0Oe5dus5yMwC8DyGF4E7vHM7ptouylKZJFAsPofPYm4rlTGxYIWNcTnWLa0MnpNR7NSm5yvQEebW2BbsTMNIvA6fhYj5zI+Kc+tNLBw+y3hLiWx7lIjodN2whYUjYLkgjXiNIaKTdw1z7BJ+i04pjWQR5dcOeb9/sB1t0UWw0I7afg4cUS1ChWZwlgOH3zKhqwi3IMJsjX6Wm8S6pUSWtuWbuEihGZpjeV2FjnRMtVTKkdAKIjhW0/OTJN3BkR7Qz/X4377mm9vz692j4j3bQiK7jlx//mXe6QiMIJzLq4AVj3tlkaBnty8s2Gy2Beu0QVOAhUQysm88NZpMxsAMhtHPVsCLYJX4+tbQbzD06/Uv+/p6e3p7O2uKJCF/r517TygrKs5vTK2q6jTbwSJL0923z6nUarWqvLystESpVBYe35cejCSju3DJbklwmOioxgR6xk/p8nAMo1+YWCwSZmQIBIJ0NESSgvA3jZe6/1afBSxiH3+YhfBQ/xB6PPqVEvVfvqz6BeDdb/9w/2AS2OTVPcCRB4dAIzfjiByGERiBERiBERiBERiBERiBERiBERiBERiBkf8uAvyj2j8aqeqeocg1xiM9tvf3QH9Uk13r+u76s8R4yyuWMS3oz4PSq8++LS8SDoYjFn/PDNcfiPBhfwFUrZwyEjKPHgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wMS0yMlQwNTo0MDozMCswMDowMPc6B3wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDEtMjJUMDU6NDA6MzArMDA6MDCGZ7/AAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTAxLTIyVDA1OjQwOjQwKzAwOjAw27eXBgAAAABJRU5ErkJggg==";class p{constructor(l,t,s,n,i){console.log(this),this.width=l,this.height=t,this.color=s,this.clippy_path=n,this.identyfikator=i,this.createDiv()}createDiv(){this.div=document.createElement("div"),this.div.style.width=`${this.width}px`,this.div.style.height=`${this.height}px`,this.div.style.backgroundColor=this.color,this.div.style.color="white",this.div.style.position="absolute",this.div.style.clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",this.div.style.textAlign="center",this.div.classList.add("test"),this.div.style.backgroundRepeat="no-repeat",this.div.style.margin="2px",this.div.style.color="red",this.div.style.backgroundImage=`url('${w}')`,this.div.id=this.identyfikator}getRoot(){return this.div}setXY(l,t){this.div.style.left=`${l}px`,this.div.style.top=`${t}px`}setText(l){this.innerHTML=l}}const m="gray";let M="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",o=document.getElementById("size"),u=document.getElementById("plansza"),f=document.getElementById("game_items"),B=document.getElementById("load"),E=document.getElementById("save"),L=document.getElementById("json_file"),h=document.getElementById("json_text");document.getElementById("hex");console.log(L);let e={};h.innerHTML=JSON.stringify(e,null,5);let A="WALL";e.level=[];let a=[];E.addEventListener("click",function(){e.lastid=a[a.length-1];const r="/saveData",l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e,null,5)};fetch(r,l).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{}).catch(t=>{console.error("Error during data save:",t)})});B.addEventListener("click",function(){const r="/loadData",l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e,null,5)};fetch(r,l).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{e=t,console.log("TO JEST LOADED DANE: ",toString(e)),h.innerHTML=JSON.stringify(e,null,5),a=[];for(let n=0;n<e.level.length;n++)a.push(e.level[n].id);o.value=e.size,u.replaceChildren();for(let n=0;n<o.value;n++){let i=n*100;for(let d=0;d<o.value;d++){let g=d*100+700,y=o.value*n+d;const c=new p(100,100,m,M,y);d%2==1&&c.setXY(g,i+60),d%2==0&&c.setXY(g,i);for(let v=0;v<e.level.length;v++)if(e.level[v].id==y){c.getRoot().innerHTML=`${e.level[v].dirout}^`,c.getRoot().style.transform=`rotate(${e.level[v].dirout*60}deg)`,c.getRoot().innerHTML=`${e.level[v].dirout}`;break}u.appendChild(c.getRoot())}}let s=document.querySelector("#plansza");for(let n=0;n<s.children.length;n++)s.children[n].addEventListener("click",function(){if(console.log(e),a.includes(this.id)){for(let i=0;i<e.level.length;i++)if(e.level[i].id==this.id){e.level[i].type=A,e.level[i].dirin=parseInt((e.level[i].dirin+1)%6),e.level[i].dirout=parseInt((e.level[i].dirout+1)%6),this.style.transform=`rotate(${e.level[i].dirout*60}deg)`,this.innerHTML=`${e.level[i].dirout}`,h.innerHTML=JSON.stringify(e,null,5);break}}else{a.push(this.id);let i={};i.id=this.id,i.dirout=0,i.dirin=3,i.x=this.id%o.value,i.z=Math.floor(this.id/o.value),i.type=A,e.level.push(i),this.style.transform=`rotate(${i.dirout*60}deg)`,this.innerHTML=`${i.dirout}`,h.innerHTML=JSON.stringify(e,null,5)}})}).catch(t=>{console.error("Error during data save:",t)})});E.value=e;for(let r=0;r<f.children.length;r++)f.children[r].addEventListener("click",function(){A=this.value});o.addEventListener("change",function(){e={},e.level=[],e.size=o.value,a=[],h.innerHTML=JSON.stringify(e,null,5),u.replaceChildren();for(let l=0;l<o.value;l++){let t=l*100;for(let s=0;s<o.value;s++){let n=s*100+700,i=o.value*l+s;const d=new p(100,100,m,M,i);s%2==1&&d.setXY(n,t+60),s%2==0&&d.setXY(n,t),console.log(s),u.appendChild(d.getRoot())}}let r=document.querySelector("#plansza");for(let l=0;l<r.children.length;l++)r.children[l].addEventListener("click",function(){if(console.log(e),a.includes(this.id)){for(let t=0;t<e.level.length;t++)if(e.level[t].id==this.id){e.level[t].type=A,e.level[t].dirin=parseInt((e.level[t].dirin+1)%6),e.level[t].dirout=parseInt((e.level[t].dirout+1)%6),this.style.transform=`rotate(${e.level[t].dirout*60}deg)`,this.innerHTML=`${e.level[t].dirout}`,h.innerHTML=JSON.stringify(e,null,5);break}}else{a.push(this.id);let t={};t.id=this.id,t.dirout=0,t.dirin=3,t.x=this.id%o.value,t.z=Math.floor(this.id/o.value),t.type=A,e.level.push(t),this.style.transform=`rotate(${t.dirout*60}deg)`,this.innerHTML=`${t.dirout}`,h.innerHTML=JSON.stringify(e,null,5)}})});