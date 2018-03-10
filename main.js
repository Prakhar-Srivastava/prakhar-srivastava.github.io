'use-strict'
const gebi=id=>document.getElementById(id)
class notifmgr {
	constructor(obj = undefined) {
		this.elem_notif = document.body
		const k=document.createElement('div')
		k.classList.add('__NOTIFICATION_CONTAINER__')
		this.elem_notif.appendChild(k)
		this.elem_notif=k
	}
	static append_text_to_root(text = "", root = document.body) {
		root.appendChild(document.createTextNode(text))
	}
	static append_to_root(elem = undefined) {
		this.elem_notif.appendChild(elem)
	}
	get_root() {
		return this.elem_notif.parentNode
	}
	async set_root(newroot) {
		this.elem_notif.parentNode.removeChild(this.elem_notif)
		this.elem_notif = newroot
		const k=document.createElement('div')
		k.classList.add('__NOTIFICATION_CONTAINER__')
		this.elem_notif.appendChild(k)
		this.elem_notif=k
	}
	create_notif_elem() {
		const elem = document.createElement('DIV')
		elem.classList.add('notif')
		return elem
	}
	push_text(txt = '') {
		let elem = this.create_notif_elem()
		elem.setAttribute('style',"padding:2em;background:#eee;color:#979797;height:fit-content;width:94%;margin:0;text-align:left;box-shadow:0px 0px 9px 5px rgba(0,0,0,0.2), 0px 0px 20px 15px rgba(0,0,0,0.1);")
		elem.appendChild(document.createTextNode(txt))
		this.elem_notif.appendChild(elem)
		this.timeout(this.disappear, 3000, elem).then(f => this.timeout(this.remove, 305, elem))
	}
	async disappear(e) {
		e.setAttribute('class', 'notif_out')
	}
	async remove(e) {
		e.parentNode.removeChild(e)
	}
	async timeout_util(fn, ms = 10, ...args) {
		let p = undefined
		try {
			p = new Promise(function (resolve) {
				setTimeout(resolve.bind(fn, ...args), ms)
			})
		} catch (err) {
			console.log(`An error occured: ${err}`)
		}
		return p
	}
	async timeout(fn, ms = 10, ...args) {
		let r = undefined
		r = await this.timeout_util(fn, ms, ...args).then(x => fn(...args))
		return r
	}
	push_custom(custom) {
		const elem = this.create_notif_elem()
		elem.appendChild(custom)
		this.elem_notif.appendChild(elem)
		this.timeout(this.disappear,3000,elem).then(f=>this.timeout(this.remove,305,elem))
	}
}


const nm = new notifmgr()
notifmgr.append_text_to_root('Mountains')
push_n = 1
const push_c = timer_id => {
	if (push_n <= 100) {
		const custom_to_push = document.createElement('DIV')
		custom_to_push.classList.add('custom_div')
		text = document.createTextNode(`Notification # ${push_n}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed sapien dolor. Mauris tincidunt condimentum nisl, vitae efficitur velit finibus in. Curabitur at dui ac dui tincidunt congue sit amet sit amet erat. Vestibulum sodales et ipsum vel ornare. Fusce laoreet, tortor vitae malesuada condimentum, lacus turpis vehicula velit, eu commodo velit augue a metus. Praesent aliquam, ex vitae scelerisque scelerisque, dolor felis sollicitudin purus, ut aliquam dui magna sed lectus. Nullam in urna id massa lobortis tristique. Duis porta vulputate tellus, ut convallis ligula ultrices sed. Ut volutpat purus quis congue porta. Sed fringilla, mauris ac ullamcorper fringilla, lectus justo lobortis erat, quis hendrerit nunc ligula eget tellus. Suspendisse mattis mattis mauris et rhoncus. In eu ante nunc. Sed sapien urna, congue quis sollicitudin eget, gravida vel metus. Aenean eu metus at diam dictum ornare vitae at libero. Fusce ullamcorper pharetra nunc id aliquet.`)
		const img=document.createElement('img')
		img.classList.add('dummy_img')
		img.src = "http://www.clker.com/cliparts/K/f/9/Q/t/E/black-mountain.svg"
		img.alt = 'notification image'
		custom_to_push.appendChild(img)
		custom_to_push.appendChild(document.createElement('br'))
		custom_to_push.appendChild(text)
		nm.push_custom(custom_to_push)
	} else
		stop(timer_id)
	push_n++
}
const stop = timer_id => clearInterval(timer_id)
push_t_n = 1
const push = timer_id => {
	if (push_t_n <= 100)
		nm.push_text(`Message # ${push_t_n}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed sapien dolor. Mauris tincidunt condimentum nisl, vitae efficitur velit finibus in. Curabitur at dui ac dui tincidunt congue sit amet sit amet erat. Vestibulum sodales et ipsum vel ornare. Fusce laoreet, tortor vitae malesuada condimentum, lacus turpis vehicula velit, eu commodo velit augue a metus. Praesent aliquam, ex vitae scelerisque scelerisque, dolor felis sollicitudin purus, ut aliquam dui magna sed lectus. Nullam in urna id massa lobortis tristique. Duis porta vulputate tellus, ut convallis ligula ultrices sed. Ut volutpat purus quis congue porta. Sed fringilla, mauris ac ullamcorper fringilla, lectus justo lobortis erat, quis hendrerit nunc ligula eget tellus. Suspendisse mattis mattis mauris et rhoncus. In eu ante nunc. Sed sapien urna, congue quis sollicitudin eget, gravida vel metus. Aenean eu metus at diam dictum ornare vitae at libero. Fusce ullamcorper pharetra nunc id aliquet.`)
	else
		stop(timer_id)
	push_t_n++
}
const div = document.createElement('DIV')
div.setAttribute('id', 'newroot')
nm.get_root().appendChild(div)
nm.set_root(div)
//setInterval(push,100) 
//setInterval(push_c,100)
const btn=gebi('notify')
btn.onclick=(e)=>{
	const msg=gebi('msg')
	const custom_to_push = document.createElement('DIV')
	custom_to_push.classList.add('custom_div')
	const img=document.createElement('img')
	img.classList.add('dummy_img')
	img.src = "http://www.clker.com/cliparts/K/f/9/Q/t/E/black-mountain.svg"
	img.alt = 'notification image'
	text = document.createTextNode(msg.value)
	custom_to_push.appendChild(img)
	custom_to_push.appendChild(document.createElement('br'))
	custom_to_push.appendChild(text)
	nm.push_custom(custom_to_push)
}
const b=gebi('notify_text')
b.onclick=e=>{
	const msg=gebi('msg')
	nm.push_text(msg.value)
}
