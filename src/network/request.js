import axios from 'axios'
//为降低各组件对axios插件的依赖，如果把每一个组件中都些了axios的使用，若有一天axios出现了问题，那么将很困难重构
//所以将axios的调用单独抽离出来，便于后期维护
export function request(config) {
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000/api/h8',
    //新接口
    //baseURL: 'http://106.54.54.237:8000',
    //baseURL: 'http://106.54.54.237:8000/api/hy',
		timeout: 10000
	})
	//请求拦截器
	instance.interceptors.request.use( config => {
		//拦截的目的
		//1.config中的一些信息不符合服务器的要求或者修改信息
		//2.每次发送网络请求时，希望在页面出现网络请求图标
		//3.某些网络请求(如登录（token）),需要加上特殊信息
		//拦截后需要返回
		return config
	}, err => {
		//拦截失败是返回这个方法
		console.log(err)
	})
	//响应拦截
	instance.interceptors.response.use( config => {
		//拦截处理后也需要返回config
		return config
	}, err => {
		console.log(err)
	}
	)
	//因axios本身也是Promise所以可以直接返回
	//在调用处再写then和catch语句
	return new instance(config)
}
