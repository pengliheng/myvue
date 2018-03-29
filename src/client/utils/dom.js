let propArray = e => {
	return Array.prototype.slice.call(e)
}
let composedPath = el => {
	var path = [];
	while (el) {
		path.push(el);
		if (el.tagName === 'HTML') {
			path.push(document);
			path.push(window);
			return path;
	   }
	   el = el.parentElement;
	}
}
let getPath = e =>{
	return e.path || (e.composedPath && e.composedPath()) || composedPath(e.target);
}
const isDomInPathFunc = args => {
    const {
        e,
        dom
    } = args;
    let path = getPath(e)
    for (let i = 0; i < path.length; i++) {
        if(path[i]== dom){
            return path[i]
        }else if(path[i] == document.body){
            return false
        }
    }
}
export default {
	getPath,
	propArray,
	isDomInPathFunc
};
