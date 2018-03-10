'use-strict'
class notifmgr{
	constructor(obj=undefined){
		this.elem_notif=document.body
	}
	static append_text_to_root(text="",root=document.body){
		root.appendChild(document.createTextNode(text))
		//console.log(`The root here is: ${root}`)
	}
	static append_to_root(elem=undefined){
		this.elem_notif.appendChild(elem)
	}
	get_root(){
		return this.elem_notif
	}
	async set_root(newroot){
		this.elem_notif=newroot
	}
	create_notif_elem(){
		const elem=document.createElement('DIV')
		elem.classList.add('notif')
		return elem
	}
	push_text(txt=''){
		let elem=this.create_notif_elem()
		elem.appendChild(document.createTextNode(txt))
		this.elem_notif.appendChild(elem)
		this.timeout(this.disappear,3000,elem).then(f=>this.timeout(this.remove,305,elem))
	}
	async disappear(e){
			e.setAttribute('class','notif_out')
		}
	async remove(e){
			e.parentNode.removeChild(e)
		}
	async timeout_util(fn,ms=10,...args){
		let p=undefined
		try{
		p=new Promise(function(resolve) { 
       setTimeout(resolve.bind(fn, ...args), ms)
   })
		}catch(err){
			console.log(`An error occured: ${err}`)
		}  
		return p
	}
	async timeout(fn,ms=10,...args){
		//console.log('waiting...')
		let r=undefined
		r=await this.timeout_util(fn,ms,...args).then(x=>fn(...args))
		//console.log('done')
		return r
	}
	push_custom(custom){
		const elem=this.create_notif_elem()
		elem.appendChild(custom)
		this.elem_notif.appendChild(elem)
		this.timeout(this.disappear,3000,elem).then(f=>this.timeout(this.remove,305,elem))
	}
}


const nm=new notifmgr()
notifmgr.append_text_to_root('So far, ')
//for(let i=0;i<10;i++)
push_n=1
const push_c=timer_id=>{
	if(push_n<=100){
const custom_to_push=document.createElement('DIV')
custom_to_push.classList.add('custom_div')
text=document.createTextNode(''+push_n)
const img=document.createElement('img')
img.classList.add('dummy_img')
		img.src="http://pngimg.com/uploads/hello/hello_PNG28.png"
		img.alt='notification image'

		
		custom_to_push.appendChild(img)
const img1=document.createElement('img')
img.classList.add('dummy_img')
		img.src="http://pngimg.com/uploads/hello/hello_PNG28.png"
		img.alt='notification image'

		
		custom_to_push.appendChild(img1)
const img2=document.createElement('img')
img.classList.add('dummy_img')
		img.src="http://pngimg.com/uploads/hello/hello_PNG28.png"
		img.alt='notification image'

		
		custom_to_push.appendChild(img2)
const img3=document.createElement('img')
img.classList.add('dummy_img')
		img.src="http://pngimg.com/uploads/hello/hello_PNG28.png"
		img.alt='notification image'

		
		custom_to_push.appendChild(img3)
const img4=document.createElement('img')
img.classList.add('dummy_img')
		img.src="http://pngimg.com/uploads/hello/hello_PNG28.png"
		img.alt='notification image'

		
		custom_to_push.appendChild(img4)
		custom_to_push.appendChild(document.createElement('br'))
		custom_to_push.appendChild(text)
	nm.push_custom(custom_to_push)
	}
	else 
		stop(timer_id)
	push_n++ 
}
const stop=timer_id=>clearInterval(timer_id)
push_t_n=1
const push=timer_id=>{
	if(push_t_n<=100)
	nm.push_text(''+push_t_n)
	else 
		stop(timer_id)
	push_t_n++  
}
//setInterval(push,100)
//nm.push_text('sooo goood!')
const div=document.createElement('DIV')
div.setAttribute('id','newroot')
nm.get_root().appendChild(div)  
nm.set_root(div)
//setInterval(push,100) 
//setInterval(push_c,500)  
setInterval(push,100)        
