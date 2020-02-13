class Utils{
    static createElement=function (type,parent=document.body,style={}) {  
        let elem = document.createElement(type);
        for (const key in style) {
            if (style.hasOwnProperty(key)) {
                const element = style[key];
                elem.style[key]=style[key];
            }
        }
        parent.appendChild(elem);
        return elem;
    }
    static dragElement(elem){
        elem.style.position="absolute";
        elem.addEventListener("mousedown",Utils.mouseHandler);
    }
    static removeDrag(elem){
        elem.removeEventListener("mousedown",Utils.mouseHandler);
    }
    static mouseHandler(e){
        if (e.type==="mousedown") {
            e.preventDefault();
            e.currentTarget.point={x:e.offsetX,y:e.offsetY};
            document.elem=e.currentTarget;
            document.addEventListener("mousemove",Utils.mouseHandler);
            document.addEventListener("mouseup",Utils.mouseHandler);
        }else if (e.type==="mousemove") {
            console.log(document.elem,e.currentTarget);
            document.elem.style.left= e.x- document.elem.point.x+"px";
            document.elem.style.top= e.y- document.elem.point.y+"px";
        }else if (e.type==="mouseup") {
            document.removeEventListener("mousemove",Utils.mouseHandler);
            document.removeEventListener("mouseup",Utils.mouseHandler);
        }
    }
    static getColor(alpha=1){
        if(alpha>1 ||alpha<0) alpha=1;
        let arr=[];
        for (let i = 0; i < 3; i++) {
            arr.push(Math.floor(Math.random()*256));
        }
        return `rgba(${arr.join()},${alpha})`;
    }
    static getRandom(max,min){
        return Math.floor(Math.random*(max-min)+min);
    }
}